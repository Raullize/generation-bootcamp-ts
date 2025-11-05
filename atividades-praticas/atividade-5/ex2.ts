import { Stack } from "./Stack"
import readlinesync = require("readline-sync")

const pilha = new Stack<string>()

let opcao: number | undefined
let nomeDoLivro: string | undefined

while (opcao != 0) {
    console.log(`\n***********************************************`)
    console.log(`1 - Adicionar Livro na Pilha`)
    console.log(`2 - Listar todos os Livros`)
    console.log(`3 - Retirar Livro da Pilha`)
    console.log(`0 - Sair`)
    console.log(`***********************************************`)

    opcao = readlinesync.questionInt('Entre com a opcao desejada: ')

    console.clear()

    switch (opcao) {
        case 1:
            nomeDoLivro = readlinesync.question('Digite o nome: ')
            pilha.push(nomeDoLivro)
            console.log(`\nPilha:`)
            pilha.printStack()
            console.log(`\nLivro Adicionado!`)
            break
        case 2:
            console.log("\nLista de Livros na Pilha: ");
            pilha.isEmpty() ? console.log(`Não há livros na pilha!`) : pilha.printStack()
            break
        case 3:
            if (pilha.isEmpty()) {
                console.log(`A Pilha está vazia!`)
            } else {
                let livroRetirado = pilha.pop()
                console.log(`\nPilha:`)
                pilha.isEmpty() ? console.log(`Não há livros na pilha!`) : pilha.printStack()
                console.log(`\nO livro ${livroRetirado} foi retirado da pilha!`)
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