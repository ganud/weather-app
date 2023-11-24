import './style.css';
import { getData, search } from './weather.js';

const KEY = 'abd0e58a710c459396d173633231811';
getData(KEY, 'germany');

document.getElementById('search-button').addEventListener('click', () => {
  search(KEY);
});

// The enter keypress as an alternative submit button
document.getElementById('search-bar').addEventListener('keypress', () => {
  if (event.key == 'Enter') {
    event.preventDefault();
    document.getElementById('search-button').click();
  }
});
