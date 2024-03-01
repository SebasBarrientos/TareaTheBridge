console.log("Bienvenid@s a los ejercicios de JS")

// Declara una variable llamada "nombre" y asígnale tu nombre
const nombre = "Sebastian"
console.log (nombre)

// Declara una variable llamada "edad" y asígnale tu edad
let edad = 27
console.log (edad)

// Declara una variable llamada "ciudad" y asígnale el nombre de tu ciudad
let ciudad = "Valencia"
console.log (ciudad)

// Declara dos variables numéricas y realiza una suma
let num1 = 3
let num2 = 7
console.log (num1 + num2)

// Declara una variable numérica y otra de texto, y concaténalas
let texto1 = "Tarea"

console.log (num1 + texto1)

// Declara una variable y asígnale un valor inicial
let num3 = 5
// Incrementa el valor de la variable en 1 y muestra el resultado
console.log(num3 + 2)
// Cambia el valor de la variable a otro número y muestra el resultado
num3=8
console.log(num3)
// Crea un array de números
let arrNum = [1,2,34]
// Crea un array de strings
let arrString = ["Pera", "Banana", "Manzanas","Mandarinas"]
// Crea un array mixto
let ar1NumString = [5,6,9,"Chau", "Mundo"]
// Accede al primer elemento del array "numeros"
console.log (arrNum[0])
// Accede al tercer elemento del array "frutas"
console.log (arrString[2])
// Modifica el segundo elemento del array "numeros"
arrNum[1] = 0
// Modifica el último elemento del array "frutas"
                //arrString [last] = "last" NO ES COMO PYTHON
arrString [arrString.length - 1] = "last"
console.log (arrString)

// Agrega un nuevo elemento al final del array "numeros"
arrNum.push (9)
console.log(arrNum)
// Agrega un nuevo elemento al principio del array "frutas"
arrString.unshift("Melon", "Sandia")
console.log(arrString)
// Elimina el último elemento del array "numeros"
arrNum.pop()
console.log(arrNum)
// Elimina el primer elemento del array "frutas"
arrString.shift()
console.log(arrString)