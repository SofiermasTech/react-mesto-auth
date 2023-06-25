export const BASE_URL = 'https://auth.nomoreparties.co';

export function register({ password, email }) {
   return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
   })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export function authorize({ password, email }) {
   return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
   })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
   // .catch(err => console.log(err))
};

export function checkToken(token) {
   return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      }
   })
      .then(res => res.json())
      .then(data => data)
};