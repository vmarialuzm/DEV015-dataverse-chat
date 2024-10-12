import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async(message, systemContent = "You are a helpful assistant.") => {

    const apiKey = getApiKey();
    const urlOpenIA = 'https://api.openai.com/v1/chat/completions';
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemContent}, //pasar un nombre de mi dataset
                { role: "user", content: message },
            ],
        }),
    }

    try {
        const response = await fetch(urlOpenIA, options)
        const result = await response.json()
        console.log(result.choices[0].message.content)
        return result.choices[0].message.content

    } catch (error) {
        console.error(error);
        return error;
    }
};
