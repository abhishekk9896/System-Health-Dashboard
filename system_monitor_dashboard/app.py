from flask import Flask, jsonify, render_template
from system_info import get_system_info

app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/api/system')
def system_api():
    return jsonify(get_system_info())

if __name__ == '__main__':
    app.run(debug=True)
