
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el
}

export const setRoutes = (routes) => {
  ROUTES = routes
}

const queryStringToObject = (queryString) => {
  // get the query string from the url
  const params = new URLSearchParams(queryString);
  // create an object from the query string
  const paramsObject = Object.fromEntries(params);
  // return the object
  return paramsObject;
}

const renderView = (pathname, props={}) => {
  // clear the root element
  rootEl.innerHTML = ''
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view, IMPLEMENTAR VISTA 404
  const viewRender = ROUTES[pathname] || ROUTES['/error'];
  // render the correct view passing the value of props
  const component = viewRender(props)
  // add the view element to the DOM root element
  return rootEl.appendChild(component)

} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const { pathname, search } = window.location;
  // convert the search params to an object
  const params = queryStringToObject(search);
  // render the view with the pathname and object
  renderView(pathname, params);
}

