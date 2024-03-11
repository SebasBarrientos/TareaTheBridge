//Variable of kelvin
const kelvin = 0

//celsius are 273 degrees less than kelvin
let celsius = kelvin -273

//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32
//When you convert from Celsius to Fahrenheit, you often get a decimal number
fahrenheit = Math.floor(fahrenheit)

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`)


//Convert celsius to the Newton scale using the equation below

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log (`The temperature is ${newton} degrees Newton`)

