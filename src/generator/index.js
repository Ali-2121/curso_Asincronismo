function* gen (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const losGen = gen()
console.log(losGen.next().value);
console.log(losGen.next().value);
console.log(losGen.next().value);
console.log(losGen.next().value);

// 1
// 2
// 3
// 4

function* iterador (array){
    for (let elemento of array){
        yield elemento
    }
}

const iterando =  iterador(['Ali', 'Deni', 'Yesi', 'Juan','Monica', 'Esteban'])

console.log(iterando.next())
console.log(iterando.next().value)
console.log(iterando.next().value)
console.log(iterando.next().value)
console.log(iterando.next().value)
console.log(iterando.next())
console.log(iterando.next())

// { value: 'Ali', done: false } //Por defecto, "next" nos regresa dos valores, "value" y "done". 
// Deni //Aquì, solo nos mostrò .value porque fue loq ue le pedimos
// Yesi
// Juan
// Monica
// { value: 'Esteban', done: false }
// { value: undefined, done: true }