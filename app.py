from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def home():
    # Render the startcam.html template
    return render_template('startcam.html')

@app.route('/run-detection', methods=['POST'])
def run_detection():
    try:
        # Run the drowsiness detection script
        subprocess.Popen(['python', 'dd.py'])
        return jsonify({"message": "Drowsiness detection started successfully!"})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Failed to start drowsiness detection."}), 500

if __name__ == "__main__":
    app.run(debug=True)
