//CALLBACK
//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function sum(num1, num2){
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback){
    return callback(num1,  num2);
}

console.log(calc(9, 3, sum));
console.log(calc(9, 3, rest));
console.log(calc(9, 3, mult));
console.log(calc(9, 3, div));


setTimeout(() => {
    console.log("Hola JavaScript");
},2000);

function grettin (name){
    console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, "Alii");
