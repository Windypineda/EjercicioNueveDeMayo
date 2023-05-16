//const edad = '18';

//operadores de igualdad

/*if (edad != 18) { // === == != !==
    console.log("Tienes 18 años!!");
} else {
    console.log("No tienes 18 años");
} */

// Conversion  de tipo de  datos

/*const number1 = "5";

const number2 = "20";
console.log(Number(number1) + Number(number2));
console.log(parseInt(number1) + parseInt(number2));

const result = number1.toString();
console.log(typeof number1);*/

// operadores Relacionales
//if (condition) { // > >= < <= }

/*const edad = 18;
if (edad >= 18) {
    console.log("Edad es mayor o igual a 18 años");
} else {
    console.log("No eres mayor  18 años");
}*/

/*const Text = "Hola";

if (Text === "Hola") {
    console.log("Hola que tal, en que puedo ayudarte");
} else if (Text === "transferir a un asesor") {
    console.log("claro!, te transferire enseguida");
} else if (Text == "Chao") {
    console.log("Fue un placer, Adios");
} else {
    console.log("Li siento, no puedo comprender");
}*/

// operadores logicos and && y or ||
/*const animal = "canario"

if (animal == "perro" || animal == "gato" || animal == "vaca") {
    console.log("Manifero");
} else {
    console.log("No esta dentro de nuestro listado");
}*/

/*const dia = "lunes"

if (dia === "sabado" || "domingo" || "festivo") {
    console.log("dia de descanso");
} else {
    console.log("A trabajar");
}*/

/*const edad = "15"
const licencia = true;
const agenteDeTransito = true;

if ((edad >= 18 && licencia) || agenteDeTransito) {
    console.log("puedes conducir");
} else {
    console.log("no puedes conducir");
}*/

// funsiones
// un bloque de codigo que podemos reutilizar

/*function sumar () {} //funcion
() => {} // funcion de ficha anonima
const sumar = () => {};*/

// programa que ayude a preparar arroz 



// funcion para hacer arroz
PrepararArroz(18, "Manizales");
PrepararArroz(20, "Bogota");
PrepararArroz(30, "Armenia");
PrepararArroz(40, "Cartagena");

function PrepararArroz(grados, ciudad) {
    /* console.log("preparar agua");
     console.log("Hechar arroz en la olla");
     console.log("poner la olla en la estufa");*/

    console.log(`para la ciudad de +$ { ciudad }
            " encender la estufa a" + $ { grados }°`);
}