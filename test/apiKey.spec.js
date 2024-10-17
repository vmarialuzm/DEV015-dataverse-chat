// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  beforeEach(() => {
    localStorage.clear();
  })

  it('debería devolver la API Key almacenada en localStorage', () => {
    const apiKey = 'apiKey';
    localStorage.setItem("apiKey", apiKey);

    expect(getApiKey()).toBe(apiKey);
  });

  it('debería devolver null si no hay una API Key en localStorage', () => {

    expect(getApiKey()).toBeNull();
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const apiKey = 'apiKey';

    setApiKey(apiKey)

    const result = localStorage.getItem("apiKey")

    expect(result).toBe(apiKey);
  });
});
