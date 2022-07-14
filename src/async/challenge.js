import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Veremos cómo usar async y await 
async function fetchData (urlApi){
    const responde = await fetch(urlApi);
    const data = await responde.json();
    return data; 
}



const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData (`${urlApi}/products`);
        const product = await fetchData (`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(product.id);
        console.log(category.name);
        console.log(category.id);

    } catch {
        console.error(error);
    }
}

anotherFunction(API);