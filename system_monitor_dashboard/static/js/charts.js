// CPU Usage Over Time
const cpuCtx = document.getElementById("cpuLineChart").getContext("2d");
const cpuLine = new Chart(cpuCtx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "CPU Usage (%)",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      fill: false,
    }]
  },
  options: { responsive: true }
});

// Memory Usage (RAM & Swap)
const memCtx = document.getElementById("memChart").getContext("2d");
const memLine = new Chart(memCtx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "RAM Usage (%)",
        data: [],
        borderColor: "rgb(54, 162, 235)",
        fill: false
      },
      {
        label: "Swap Usage (%)",
        data: [],
        borderColor: "rgb(255, 206, 86)",
        fill: false
      }
    ]
  },
  options: { responsive: true }
});

// Disk Usage Donut
const diskCtx = document.getElementById("diskDonut").getContext("2d");
const diskDonut = new Chart(diskCtx, {
  type: "doughnut",
  data: {
    labels: ["Used", "Free"],
    datasets: [{
      data: [0, 100],
      backgroundColor: ["#FF6384", "#36A2EB"]
    }]
  },
  options: { responsive: true }
});

// Network I/O
const netCtx = document.getElementById("netChart").getContext("2d");
const netChart = new Chart(netCtx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Received (MB)",
        data: [],
        borderColor: "rgb(153, 102, 255)",
        fill: false
      },
      {
        label: "Sent (MB)",
        data: [],
        borderColor: "rgb(255, 159, 64)",
        fill: false
      }
    ]
  },
  options: { responsive: true }
});

// Uptime Gauge – Fake it with a Doughnut chart
const uptimeCtx = document.getElementById("uptimeGauge").getContext("2d");
const uptimeGauge = new Chart(uptimeCtx, {
  type: "doughnut",
  data: {
    labels: ["Uptime", "Down"],
    datasets: [{
      data: [100, 0],
      backgroundColor: ["#4CAF50", "#E0E0E0"]
    }]
  },
  options: { responsive: true }
});

// Historical Trends
const histCtx = document.getElementById("historyArea").getContext("2d");
const historyArea = new Chart(histCtx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "CPU Usage (%)",
        data: [],
        borderColor: "#f44336",
        fill: false
      },
      {
        label: "Memory Usage (%)",
        data: [],
        borderColor: "#2196F3",
        fill: false
      }
    ]
  },
  options: { responsive: true }
});
