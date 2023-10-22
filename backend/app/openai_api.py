import openai


def get_openai_reply(messages):
    openai.api_key = "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"

    # Construct the prompt
    prompt = [{"role": "system", "content": "You are a helpful assistant."}]
    prompt.extend(messages)

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=prompt, max_tokens=150
    )
    reply = response["choices"][0]["message"]["content"]
    return reply
