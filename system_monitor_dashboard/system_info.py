import psutil
import platform
import datetime

def get_system_info():
    boot_time = datetime.datetime.fromtimestamp(psutil.boot_time())
    uptime = datetime.datetime.now() - boot_time

    # Get CPU percent usage per core and overal
    cpu_usage = psutil.cpu_percent(interval=1, percpu=False)
    per_core = psutil.cpu_percent(interval=1, percpu=True)

    # Get Memory
    virtual_mem = psutil.virtual_memory()
    swap = psutil.swap_memory()

    # Get Disk
    disk_usage = psutil.disk_usage('/')
    disk_io = psutil.disk_io_counters()

    # Get Network
    net_io = psutil.net_io_counters()

    # Battery (optional - may not be available on all devices)
    try:
        battery = psutil.sensors_battery()
        battery_status = {
            "percent": battery.percent,
            "plugged": battery.power_plugged
        } if battery else {"percent": None, "plugged": None}
    except:
        battery_status = {"percent": None, "plugged": None}

    # Get top processes
    processes = sorted(psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']), key=lambda p: p.info['cpu_percent'], reverse=True)[:5]
    top_procs = [{
        "pid": p.info['pid'],
        "name": p.info['name'],
        "cpu": p.info['cpu_percent'],
        "memory": p.info['memory_percent']
    } for p in processes]

    return {
        "cpu_usage": cpu_usage,
        "per_core": per_core,
        "memory": {
            "total": virtual_mem.total,
            "used": virtual_mem.used,
            "percent": virtual_mem.percent,
            "swap": {
                "total": swap.total,
                "used": swap.used,
                "percent": swap.percent
            }
        },
        "disk": {
            "total": disk_usage.total,
            "used": disk_usage.used,
            "percent": disk_usage.percent,
            "read_bytes": disk_io.read_bytes,
            "write_bytes": disk_io.write_bytes
        },
        "network": {
            "bytes_sent": net_io.bytes_sent,
            "bytes_recv": net_io.bytes_recv
        },
        "battery": battery_status,
        "uptime": str(uptime).split('.')[0],  # clean formatting
        "boot_time": boot_time.strftime("%Y-%m-%d %H:%M:%S"),
        "top_processes": top_procs
    }
