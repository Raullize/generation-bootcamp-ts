# 💻 generation-bootcamp-fullstack-ts

Este repositório serve como meu caderno de anotações e prática para o **Bootcamp Full Stack** da Generation Brasil.

Aqui eu registro e resolvo os exercícios e desafios de lógica, algoritmos e programação em geral, utilizando a prática para consolidar os fundamentos essenciais da formação, com foco em **TypeScript**.

## Repositórios do Bootcamp

- **[generation-bootcamp-js](https://github.com/Raullize/generation-bootcamp-js)**: Exercícios e projetos resolvidos com JavaScript.
- **[generation-bootcamp-ts](https://github.com/Raullize/generation-bootcamp-ts)**: Exercícios e projetos resolvidos com TypeScript.

## Como testar os exercícios TypeScript

Para executar os exercícios em TypeScript localmente, você precisará ter o `ts-node` instalado. Siga estes passos:

1. Na raiz do projeto, instale as dependências:

```bash
npm install
```

2. Entre na pasta do exercício que quer rodar:

```bash
cd <caminho-do-exercicio>
```

3. Execute o arquivo `.ts` com o `ts-node`.

```bash
ts-node nomeDoExercicio.ts
```

**Dicas rápidas:**
- Use `ls` (ou `dir` no Windows CMD) para listar os arquivos na pasta do exercício.
- Estes comandos funcionam na maioria dos terminais modernos (bash, Git Bash, WSL, PowerShell).

---

## Desativando o Autocomplete no VS Code

Para evitar que as sugestões automáticas de assistentes de código (como o GitHub Copilot) atrapalhem, você pode desativá-las para tipos de arquivo específicos no VS Code.

Adicione o seguinte trecho ao seu arquivo `settings.json` para desabilitar as sugestões inline apenas para arquivos TypeScript:

```jsonc
// Desabilitar sugestões inline para TypeScript
"[typescript]": {
    "editor.inlineSuggest.enabled": false
}
```

Isso impede que o assistente mostre sugestões automáticas enquanto você digita código TypeScript. Se você também trabalha com JavaScript, pode adicionar uma configuração semelhante para arquivos `.js`:

```jsonc
// Desabilitar sugestões inline para JavaScript
"[javascript]": {
    "editor.inlineSuggest.enabled": false
}
```
