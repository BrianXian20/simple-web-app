from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.json
    user_input = data.get('userInput', '')
    response_message = f"Received: {user_input}"
    return jsonify({"message": response_message})

@app.route('/')
def home():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
