import { Queue } from "./Queue"
import readlinesync = require("readline-sync")

const fila = new Queue<string>()

let opcao: number | undefined
let nome: string

while (opcao != 0) {
    console.log(`\n***********************************************`)
    console.log(`1 - Adicionar Cliente na Fila`)
    console.log(`2 - Listar todos os Clientes`)
    console.log(`3 - Retirar Cliente da Fila`)
    console.log(`0 - Sair`)
    console.log(`***********************************************`)

    opcao = readlinesync.questionInt('Entre com a opcao desejada: ')

    console.clear()

    switch (opcao) {
        case 1:
            nome = readlinesync.question('Digite o nome: ')
            fila.enqueue(nome)
            console.log(`\nFila:`)
            fila.printQueue()
            console.log(`\nCliente Adicionado!`)
            break
        case 2:
            console.log("\nLista de Clientes na Fila: ");
            fila.isEmpty() ? console.log(`Não há clientes na fila!`) : fila.printQueue()
            break
        case 3:
            if (fila.isEmpty()) {
                console.log(`A Fila está vazia!`)
            } else {
                let clienteChamado = fila.dequeue()
                console.log(`\nFila:`)
                fila.isEmpty() ? console.log(`Não há clientes na fila!`) : fila.printQueue()
                console.log(`\nO Cliente ${clienteChamado} foi Chamado!`)
            }
            break
        case 0:
            console.log(`Saindo...`)
            console.log(`Programa Finalizado!`)
            break
        default:
            console.log(`Opção inválida!`)
    }
}