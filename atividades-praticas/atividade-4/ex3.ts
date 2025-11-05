import readlinesync = require("readline-sync")

const setNumeros: Set<number> = new Set<number>()

let numero: number
let acc: number = 0

while (acc < 10) {
    acc++
    numero = readlinesync.questionInt(`Digite um numero: `)
    setNumeros.add(numero)
}

console.log(`\nListar dados do Set:\n`)

for (let numero of setNumeros) {
    console.log(numero)
}
