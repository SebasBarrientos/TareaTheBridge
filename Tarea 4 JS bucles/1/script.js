
var numeroUno = 5

let texto = "Hola Mundo"

numeroUno = 2

const array = [20,30,60,"Ahora","Nunca"]

let numeroDos = 4



console.log (numeroDos+numeroUno)
console.log (numeroDos*numeroUno)
console.log (numeroDos-numeroUno)
console.log (numeroDos/numeroUno)
console.log (numeroUno**3)
console.log (numeroDos%numeroUno)


console.log('---Crea una variable con un array que se llame "numeros" y añade números dentro')

console.log ("let numeros = [1,2,7,6,5,4];")
let numeros = [1,2,7,6,5,4];
let resultado= 0
console.log ("---Calcular su suma de todos los números del array 'numeros'. Saca el resultado en un console.log()")

for (let i =0; i< numeros.length;i++) {
    resultado+=numeros[i]
}
console.log("Este es el resultado " + resultado)

console.log ('---Consigue el número más alto del array "numeros". Saca el resultado en un console.log()')
let numeroGrande =0


for (let i =0; i< numeros.length;i++) {
        if (numeros[i] > numeroGrande) {
            numeroGrande = numeros[i]
    } 
}
console.log(numeroGrande)
console.log ('---Suma 1 a cada número si es 5 o mayor de 5 y resta 1 si es menor de 5. Saca el resultado en un console.log() saca el resultado uno a uno por consola, donde diga lo que ha hecho (Por ejemplo si ha sumado 1 a 6 debería aparecer: "ELEMENTO ITERADO" es mayor a 5. El resultado es "ELEMENTO ITERADO + 1" ).')

for (let i =0; i< numeros.length;i++) {
    if (numeros[i] >= 5) { 
        resultado=numeros[i]+1
        console.log (numeros[i] + ' es mayor a 5, el resultado es ' + resultado)
    }else {
        resultado=numeros[i]-1
        console.log (numeros[i] + ' es menor a 5, el resultado es ' + resultado)
    } 
}


console.log ('Cuenta cuantos elementos hay en el array. Saca el resultado en un console.log()')

console.log(numeros.length)


console.log ('Cuenta cuantas veces se repiten las palabras. Saca el resultado en un console.log()')




let palabras = ["hola", "hola", "Queso", "hola", "hola", "Queso"];
let contadorPalabras = {};

// Recorremos el array de palabras
for (let i = 0; i < palabras.length; i++) {
  let palabraActual = palabras[i];
  let encontrado = false;

  // Recorremos el objeto contadorPalabras para buscar la palabra actual
  for (let j = 0; j < palabras.length; j++) {
    if (palabras[j] === palabraActual && i !== j) {
      encontrado = true;
      contadorPalabras[palabras[j]]++;
      break;
    }
  }

  // Si la palabra no se encuentra en el objeto, la agregamos con un valor de 1
  if (!encontrado) {
    contadorPalabras[palabraActual] = 1;
  }
}

// Imprimimos el resultado
for (let palabra in contadorPalabras) {
    console.log(`La palabra "${palabra}" ha aparecido ${parseInt(contadorPalabras[palabra])} veces`);
}




/*

let palabras = ["hola","hola","Queso","hola","hola",'Queso']
let contador = 0
let indice = 0

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    while (palabra === palabras[i] || i < palabras.length) {
    if (palabra === palabras[i]) {
        contador++;
        }
        i++;
    }
    console.log(`La palabra ${palabra} ha aparecido ${contador} veces`);
  }
  */