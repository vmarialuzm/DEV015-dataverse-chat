
import { Home } from './views/Home.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

const el = document.getElementById("root");

// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(el);
  onURLChange();

  // TODO Nose donde poner esta funcion ni como usarla
  // Handle URL changes
  window.addEventListener('popstate', ({objetivo}) => {
  onURLChange(/* location */);
});
});