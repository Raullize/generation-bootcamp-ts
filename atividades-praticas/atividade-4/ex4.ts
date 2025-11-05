import readlinesync = require("readline-sync")

const setNumeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])

let numero: number
let foiEncontrado: boolean

numero = readlinesync.questionInt(`Digite o numero que voce deseja encontrar: `)

foiEncontrado = setNumeros.has(numero)

if (foiEncontrado) {
    console.log(`O numero ${numero} foi encontrado!`)
} else {
    console.log(`O numero ${numero} não foi encontrado!`)
}
