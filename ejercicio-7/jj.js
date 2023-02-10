/*Ingresar las edades y determiner si pueden votar mostrando los resultados por consola*/

let ed = prompt("ingresa tu edad");
let edad = parseInt(ed);

if(edad < 18){
    console.log("no puedes votar");
}else{
    console.log("puedes votar");
};