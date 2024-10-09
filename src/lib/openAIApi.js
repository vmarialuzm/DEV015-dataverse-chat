import { getApiKey } from './apiKey.js';
import axios from 'axios';

export const communicateWithOpenAI = async(messages) => {

    const apiKey = getApiKey();
    const urlOpenIA = 'https://api.openai.com/v1/chat/completions';

    try {
        const response = await axios.post(
            urlOpenIA,
            {
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    {
                        role: "user",
                        content: "Write a haiku about recursion in programming.",
                    },
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response);
    } catch (error) {
        console.error(error);
    }

};
