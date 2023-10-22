from app import app
from flask import request, jsonify, render_template
from app.openai_api import get_openai_reply
import json
from flask_cors import cross_origin


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/get_reply", methods=["POST"])
@cross_origin()
def get_reply():
    # Get the message and context from the request
    message = request.json.get("message")
    context = request.json.get("context")

    print(f"Message: {message}")

    # Ensure context is formatted as a list of message dictionaries
    if context:
        if isinstance(context, str):
            try:
                context = json.loads(context)
            except json.JSONDecodeError:
                context = [{"role": "user", "content": context}]
        elif not isinstance(context, list):
            context = [{"role": "user", "content": str(context)}]
    else:
        context = []

    # Append the new message to the context
    context.append({"role": "user", "content": message})

    reply = get_openai_reply(context)

    # Return the reply in a JSON fomat with the response code of 200 and headers containing the cors policy.
    return jsonify({"reply": reply})
