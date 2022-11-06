import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}

const data = {
  "title": "This is the product 206",
  "price": 989,
  "description": "A short description XD",
  "categoryId": 2,
  "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));