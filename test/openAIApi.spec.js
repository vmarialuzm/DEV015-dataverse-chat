import { communicateWithOpenAI } from '../src/lib/openAIApi.js';


const MOCK_MESSAGE = { 
  choices :[
    {
      "message": {
        "content": "test pass",
      },
    },
  ],
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_MESSAGE)
}));

beforeEach(() => {
  fetch.mockClear();
});


it('debería devolver la respuesta de openAI', async() => {
  const message = 'Hola';
  const props = {
    name: 'Machu Picchu',
    shortDescription: 'Maravilla del Mundo'
  }
  const result = await communicateWithOpenAI(message, props);
  expect(result).toEqual("test pass");
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('debería devolver el error si OpenAI falla', async() => {
  fetch.mockImplementationOnce(() => Promise.reject(null));

  const message = 'Hola';
  const props = {
    name: 'Machu Picchu',
    shortDescription: 'Maravilla del Mundo'
  }
  const result = await communicateWithOpenAI(message, props);
  expect(result).toEqual(null);
})