
/*Ingresar 2 numeros por teclado y determiner cual de los 2 numero es mayor */

let prim = prompt("introdusca el primer numero");
let segun = prompt("indroduca el segundo numero");

let numero1 = parseInt(prim);
let numero2 = parseInt(segun);

if(numero1 > numero2){
    alert("el numero mayor es el : " + numero1);
}else if(numero1 < numero2){
    alert("el numero mayor es : " + numero2);
}else{
    alert("los numeros son iguales o no estan correctos")
};