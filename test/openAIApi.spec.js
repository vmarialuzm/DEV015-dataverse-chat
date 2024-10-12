import { communicateWithOpenAI } from '../src/lib/openAIApi.js'

describe('getApiKey', () => {

  it('debería devolver la respuesta de openAI', async() => {
    await expect(communicateWithOpenAI('Hola', 'Machu Picchu').resolves.toBe('¡Hola! ¿En qué puedo ayudarte hoy?'))
  });
});

// hacer mocks, fetch global, mock fetch
