
import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import { Error } from './views/Error.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const el = document.getElementById("root");

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/chat': Chat,
  '/error': Error
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(el);
  onURLChange(window.location);

});


// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
  onURLChange(window.location);
  console.log(objetivo)
});