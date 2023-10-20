from app import app
from flask import request, jsonify, render_template
from app.openai_api import get_openai_reply
import json

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_reply', methods=['POST'])
def get_reply():
    message = request.json.get('message')
    context = request.json.get('context')

    # Ensure context is formatted as a list of message dictionaries
    if context:
        if isinstance(context, str):
            try:
                context = json.loads(context)
            except json.JSONDecodeError:
                context = [{'role': 'user', 'content': context}]
        elif not isinstance(context, list):
            context = [{'role': 'user', 'content': str(context)}]
    else:
        context = []

    # Append the new message to the context
    context.append({'role': 'user', 'content': message})

    reply = get_openai_reply(context)
    return jsonify({'reply': reply})
