//                                          VARIABLES Y OPERADORES ARISMETICOS.

// 1. Crea un programa que solicite al usuario dos números y muestre la suma de ambos.

const numero1 = 6
const numero2 = 5

const suma = (numero1 + numero2)
console.log("La suma de los numeros ingresados es:" + suma);

// 2. Escribe un programa que calcule el área de un paralelogramo cuando la base sea 10 y la altura 7.

const base = 10;
const altura = 7;

const area = (base * altura);
console.log("el area de un paralelogramo es:" + area)

//                                                  CONDICIONALES.
// 1. Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.

const edad = 30;

if (edad >= 18) {
    console.log("Su edad es Mayor de edad.");
} else {
    console.log("Su edad NO es Mayor de edad.");
}

// 2. Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.

const numero = 0;

if (numero > 0) {
    console.log(" Este Numero Es Positivo ");
} else if (numero < 0) {
    console.log("Este Numero Es Negativo.");
} else {
    console.log("Este Numero Es 0 ");
}

//                                               ARRAYS.
// 1. Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

const nombres = ["Windy", "Carlos", "Sofia", "Moises"];

/*console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);*/


for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 2. Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.

let numeros = [5, -1, 10, 2, 6];

var mayor = 0;
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    };
}
console.log(" El Numero Mayor Es: " + mayor);

//                                                         OBJETOS 
// 1. Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola.

const persona = {
    nombre: "Windy",
    apellido: "Pineda",
    edad: 27,
    profesion: "Ingeniera Ambiental"

};

console.log(`Hola Mi Nombre Es ${persona.nombre} ${persona.apellido} Tengo ${persona.edad} años y soy ${persona.profesion}`);


// 2. Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.

const carritoCompras = [{
    producto: "Nevera",
    total: 500000,
}, {
    producto: "Cama",
    total: 200000,
}, {
    producto: "Estufa",
    total: 150000,
}, {
    producto: "Sofa",
    total: 2500000,
}, {
    producto: "Bicicleta",
    total: 500000,
}, ]
console.log(`el producto es: ${carritoCompras[0].producto} y tiene un valor de: ${carritoCompras[0].total} `);
console.log(`el producto es: ${carritoCompras[1].producto} y tiene un valor de: ${carritoCompras[1].total} `);
console.log(`el producto es: ${carritoCompras[2].producto} y tiene un valor de: ${carritoCompras[2].total} `);
console.log(`el producto es: ${carritoCompras[3].producto} y tiene un valor de: ${carritoCompras[3].total} `);
console.log(`el producto es: ${carritoCompras[4].producto} y tiene un valor de: ${carritoCompras[4].total} `);

//                                             CICLOS 
// 1. Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

for (let i = 1; i < 11; i++) {
    console.log(" Imprima Los Numeros:" + i)
}

// 2. Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.

const Numero = 10;

for (let i = 1; i < Numero; i = i + 2) {
    console.log("Todos Los Numeros Pares Empezando Desde 1 Son:" + i)
}

//                                      ARRAY DE OBJETOS 
// 1. Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.

const personaS = [{
        nombre: "Diana",
        apellido: "Perez",
        edad: 15,
        profesion: "Estudiante Bachicher"

    },
    {
        nombre: "Sofia",
        apellido: "Morales",
        edad: 27,
        profesion: "Contadora"

    }, {
        nombre: "Andres",
        apellido: "Soler",
        edad: 22,
        profesion: "Ingeniera Civil"

    },

]
for (let i = 0; i < personaS.length; i++) {
    console.log(` El Señor@  ${personaS[i].nombre} ${personaS[i].apellido} Tiene ${personaS[i].edad} Años  y Su Profesion Es: ${personaS[i].profesion} `)
}


//                     Variables, condicionales, ciclos, arrays, objetos, operadores aritméticos, relacionales y lógicos:

// Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

let IngreseNumero = 3;

let NumeroAleatorio = Math.floor(Math.random() * (IngreseNumero + 1));

console.log(`El numero que ingreso es: ${IngreseNumero} El numero Aleatorio es: ${NumeroAleatorio}`);

if (NumeroAleatorio == IngreseNumero) {
    console.log("Acaba de acertar el numero");
} else {
    console.log(" No acerto el número");
}