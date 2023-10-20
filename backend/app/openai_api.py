import openai

def get_openai_reply(messages):
    openai.api_key = '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'

    # Construct the prompt
    prompt = [{'role': 'system', 'content': 'You are a helpful assistant.'}]
    prompt.extend(messages)

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=prompt,
        max_tokens=150
    )
    reply = response['choices'][0]['message']['content']
    return reply
