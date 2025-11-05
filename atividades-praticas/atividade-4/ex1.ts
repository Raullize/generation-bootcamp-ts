import readlinesync = require("readline-sync")

const cores: Array<string> = new Array<string>(3)

for (let i = 0; i <= cores.length - 1; i++) {
    cores[i] = readlinesync.question('Digite uma cor: ')
}

console.log(`\nListar todas as cores:\n`)

for (let cor of cores) {
    console.log(cor)
}

console.log(`\nOrdenar as cores:\n`)

cores.sort()

for (let cor of cores) {
    console.log(cor)
}

// console.log(cores)