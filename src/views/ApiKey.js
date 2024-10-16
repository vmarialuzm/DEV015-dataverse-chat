import { navigateTo } from "../router.js";
import { setApiKey } from "../lib/apiKey.js";

export function ApiKey() {
  const apiKeyEl = document.createElement('div');
  apiKeyEl.id = 'apiKeyEl';

  const apiKeyTitle = document.createElement('h1');
  apiKeyTitle.textContent = 'Agregar API KEY';

  const apiKeyInput = document.createElement('input');
  apiKeyInput.type = 'text';
  apiKeyInput.placeholder = 'Ingresa/pega la API KEY aquí';
  apiKeyInput.id = 'apiKeyInput';

  const apiKeyButton = document.createElement('button');
  apiKeyButton.textContent = 'Guardar API KEY';

  // evento click y redirige a home
  apiKeyButton.addEventListener('click', () => {
    const apiKeyValue = document.getElementById('apiKeyInput').value;

    // Guardar la API Key en el Local Storage
    setApiKey(apiKeyValue);

    navigateTo("/")
  });

  // Añadir los elementos al contenedor
  apiKeyEl.appendChild(apiKeyTitle);
  apiKeyEl.appendChild(apiKeyInput);
  apiKeyEl.appendChild(apiKeyButton);

  return apiKeyEl;
}