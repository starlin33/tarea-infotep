
/*Ingresar por consola 2 numero y mostrar el resultado de la suma, resta, multiplicacion y division*/

let primero = prompt("introdusca el primer numero");

let segundo = prompt("introdusca el segundo numero");

let numero1 = parseInt(primero);
let numero2 = parseInt(segundo);

let suma = ("la suma es " + (numero1 + numero2));
let resta = ("la resta es " + (numero1 - numero2));
let multiplicacion = ("la multiplicacion es " + (numero1 * numero2));
let division = ("la division es " + (numero1 / numero2));

console.log(suma + "\n",resta + "\n", multiplicacion + "\n", division + "\n");
