//PROMESAS
//Algo que va a pasar ahora, después o nunca
//Estados de la promesa: 
// 1.  Pendiente (cuando se está ejecutando)
// 2. Cumplida 
// 3. Rechazada

const promesa = new Promise (function (resolve, reject){
    resolve ('Aquí tod bien'); 
})

const cows =  8;

const countCows = new Promise ((resolve, reject) => {
    if (cows > 10){
        resolve (`Si puedes cumplir con la demanada, porque tienes ${cows} vaquitas :)` )
    }else {
        reject (`No puedes cumplir con la demanada, porque tienes ${cows} vaquitas :(` )
    }
})
countCows.then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally (() => console.log ("la promesa finalizó"));

//Aquí, por la forma en que está estructurada la promesa, sí puede llamarse la promesa y enseguida el then.
//Aquí no puedes llamar la promesa normal, con los paréntesis, tienes que escribir el nombre de la constante que tiene dentro la promesa, y enseguida usar el "then", no puedes llamarlo debajo, como en el uso de la promesa que está debajo de este ejemplo 


//Esta es otra manera de usar las promesas. 
//Aquí se usa como una función que dentro te retorna una promesa

    const helloPromise = () => {
        return new Promise ( (resolve, reject ) => {
            if (true){
               resolve ('Hey');
            }
            else {
               reject ('Ups !!');
            }
            } );
   }
   
   helloPromise ()
     .then ((response) => console.log(response))
     .then (() => console.log('Esta es otra respuesta'))
     .catch ((error) => console.log(error));

//La manera de llamar la promesa, el "then, el "catch" son diferentes, porque la estructura de la promesa es distinta. 
//Aquí mandas llamar la función, normal, con los paréntesis y entonces, debajo puedes llamar "then" y "catch". No es necesario el uso de llaves en este caso, solo se debe tener cuidado de no poner ; al final del "then". 