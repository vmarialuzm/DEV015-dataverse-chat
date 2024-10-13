import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import fetch from 'node-fetch';

jest.mock("node-fetch", () => jest.fn()); //no entiendo esta parte


test('debería devolver la respuesta de openAI', async() => {
  fetch.mockReturnValueOnce({
    json: () => 
      Promise.resolve({
        content: "test pass",
      }),
  });

  const message = 'Hola';
  const props = {
    name: 'Machu Picchu',
    shortDescription: 'Maravilla del Mundo'
  }
  const result = await communicateWithOpenAI(message, props);
  expect(result.content).toBe("test pass");
});


// hacer mocks, fetch global, mock fetch
