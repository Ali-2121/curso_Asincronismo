const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open ('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback (null, JSON.parse(xhttp.responseText))
            }else {
                const error = new Error ('Error' + urlApi);
                return callback (error, null);
            }
        }
     }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
  if (error1) return console.error(error1);
   fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
    })
   })

});

//Por nuestra versión de node primero probamos llegando solo al segundo anidamiento haciendo un console.log de:
//console.log(data1[0]);
//console.log(data2.title);
//Este fue el resultado en consola a ejecutar todo el código
// { id: 116,
//     title: 'Generic Fresh Computer',
//     price: 405,
//     description:
//      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
//     category:
//      { id: 5,
//        name: 'Others',
//        image: 'https://api.lorem.space/image?w=640&h=480&r=407' },
//     images:
//      [ 'https://api.lorem.space/image?w=640&h=480&r=1746',
//        'https://api.lorem.space/image?w=640&h=480&r=503',
//        'https://api.lorem.space/image?w=640&h=480&r=2218' ] }
//   Generic Fresh Computer


//Después, quitamos los optional chaining e hicimos el llamado del console.log de las 3 peticiones, a (data1, data2, data3) para probar. Este fue el resultado
// { id: 116,
//     title: 'Generic Fresh Computer',
//     price: 405,
//     description:
//      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
//     category:
//      { id: 5,
//        name: 'Others',
//        image: 'https://api.lorem.space/image?w=640&h=480&r=407' },
//     images:
//      [ 'https://api.lorem.space/image?w=640&h=480&r=1746',
//        'https://api.lorem.space/image?w=640&h=480&r=503',
//        'https://api.lorem.space/image?w=640&h=480&r=2218' ] }
//   Generic Fresh Computer
//   Others
  




