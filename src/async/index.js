const fnAsync = () => {
   return new Promise((resolve, reject) => {
     (true)
     ? setTimeout(() => resolve ('Async!!'), 3000)
     : reject (new Error ('Hubo un error!!'));
   });  
}

const anotherFunction = async() => {
    const algoAqui = await fnAsync ();
    console.log(algoAqui);
    console.log('Holis :)');
}

console.log('Before');
anotherFunction();
console.log('After');

// Before
// After
// Async!!
// Holis :)