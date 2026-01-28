from flask import Flask, request, jsonify
from chatbot import get_response

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message")
    reply = get_response(message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
