import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = (message, systemContent = "You are a helpful assistant.") => {

    const apiKey = getApiKey();
    const urlOpenIA = 'https://api.openai.com/v1/chat/completions';

    return fetch(urlOpenIA, {
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
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.choices[0].message.content);
        return data.choices[0].message.content;
    })   
    .catch(error => {
        console.log('Error:', error);
        throw error;
    }); 
};
