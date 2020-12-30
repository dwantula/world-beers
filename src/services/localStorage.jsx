export function saveItemInLocalStorage(key, value) {
  const valueStringified = JSON.stringify(value);
  localStorage.setItem(key, valueStringified);
}

export function getItemFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
