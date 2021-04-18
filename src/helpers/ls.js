export const saveApp = state => {
  localStorage.setItem('MY_APP', JSON.stringify(state));
};

export const loadApp = () => {
  return JSON.parse(localStorage.getItem('MY_APP')) || {};
};
