import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi){
    return fetch(urlApi);

};

//  fetchData(`${API}/products`)
//      .then (response => response.json())
//      .then(products => {
//          console.log(products);
//      })
//      .then (() => {
//          console.log('hola')
//      })
//      .catch(error => console.log (error));

 fetchData (`${API}/products`)
   .then(response => response.json())
   .then(products => {
     console.log(products)
     return fetchData(`${API}/products/${products[2].id}`)
   })
    .then(response => response.json())
    .then(product => {
     console.log(product.title)
     console.log(product.id)
     console.log(product.description)
     return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response =>  response.json())
    .then(category => {
     console.log(category.id)
     console.log(category.name)
     console.log(category.image)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó el proceso'))