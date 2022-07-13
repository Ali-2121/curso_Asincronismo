import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch (urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const miInfo = {
    "title": "New Product de Ali y Deni, el 252",
    "price": 252,
    "description": "Estamos intentando hacer un post",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`, miInfo)
   .then(response => response.json())
   .then(miInfo => console.log(miInfo));

//{
//     title: 'New Product de Ali y Deni',
//     price: 111111,
//     description: 'Estamos intentando hacer un post',
//     images: [ 'https://placeimg.com/640/480/any' ],
//     category: {
//       id: 1,
//       name: 'Clothes',
//       keyLoremSpace: 'fashion',
//       image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=168'
//     },
//     id: 250
//   }

// {
//     title: 'New Product de Ali y Deni, el 251',
//     price: 251,
//     description: 'Estamos intentando hacer un post',
//     images: [ 'https://placeimg.com/640/480/any' ],
//     category: {
//       id: 1,
//       name: 'Clothes',
//       keyLoremSpace: 'fashion',
//       image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=168'
//     },
//     id: 251
//   }