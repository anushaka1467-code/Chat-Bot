import random

responses = {
    "hi": ["Hello!", "Hi there!", "Hey 👋"],
    "how are you": ["I'm fine 😄", "Doing great!", "Awesome!"],
    "bye": ["Goodbye!", "See you later!", "Bye 👋"],
}

def get_response(message):
    msg = message.lower()
    for key in responses:
        if key in msg:
            return random.choice(responses[key])
    return "Sorry, I am still learning 🤖"
