// src/lib/apiKey.js

export const getApiKey = () => {
  const apiKey = localStorage.getItem("apiKey");
  return apiKey
};
 
export const setApiKey = (key) => {
  localStorage.setItem("apiKey", key)
};