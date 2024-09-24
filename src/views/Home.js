// src/views/Home.js
import { navigateTo } from './router.js';

export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';

    const linkEl = document.querySelector('.aboutLink');
    linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
    return viewEl;
  }
  
