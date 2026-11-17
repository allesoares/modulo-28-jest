# Módulo 28 — Testes de unidade com Jest

Testes para o exercicio de javascript do mudulo 27

## Objetivo

Neste exercício você irá praticar conceitos básicos de **JavaScript**, incluindo:

- Tipos de dados
- Variáveis
- Operadores de comparação
- Operadores lógicos
- Funções
- Manipulação de objetos

O objetivo é implementar algumas funções que validam se um **cadastro de usuário é válido**.

Este código também será utilizado no **próximo módulo**, onde criaremos **testes automatizados com Jest**.

---

# Cenário

Um sistema possui um cadastro de usuários e precisa validar algumas regras antes de considerar o cadastro válido.

As regras são:

- O usuário deve ter **18 anos ou mais**
- O email deve conter **"@"**
- O usuário deve estar **ativo**

---

# Desafio

No arquivo `usuario.js`, as funções do desafio estão implementadas.

As funções implementadas são:

## verificarMaiorIdade

Esta função deve retornar:

- `true` se a idade for **maior ou igual a 18**
- `false` caso contrário

---

## usuarioAtivo

Esta função deve verificar se o usuário está ativo.

Ela deve retornar:

- `true` se o usuário estiver ativo
- `false` caso contrário

---
## Como executar o exercício

1. Abra o terminal

2. Acesse a pasta do projeto


cd nome-da-pasta-do-projeto


3. Execute o arquivo JavaScript com Node.js


node usuario.js


---

## Resultado esperado

Após implementar corretamente as funções, o resultado no console deve ser parecido com este:


Usuário 1 válido? true

Usuário 2 válido? false

## Solução do módulo 27

- `verificarMaiorIdade(idade)` usa `idade >= 18`, incluindo quem tem exatamente 18 anos.
- `usuarioAtivo(usuario)` usa `usuario.ativo === true`, retornando um booleano.
- `validarCadastro(usuario)` combina maioridade, email válido e usuário ativo com `&&`.

Para conferir os dois cenários fornecidos, execute `node usuario.js`.

## Módulo 28 — Testes de unidade com Jest

Os testes estão em `usuario.test.js`, ao lado de `usuario.js`, e validam as
quatro funções exportadas sem alterar as regras implementadas no módulo 27.

### Como executar

Com Node.js e npm instalados, execute na pasta do projeto:

```sh
npm ci
npm test
```

### Cenários e técnica aplicada

- `verificarMaiorIdade`: 17, 18 e 19 anos, aplicando análise de valor limite.
- `validarEmail`: email com `@`, sem `@` e vazio. A regra verifica apenas a
  presença de `@`, sem exigir validação completa do formato de um email.
- `usuarioAtivo`: ativo, inativo e valores diferentes do booleano `true`
  (texto, número e propriedade indefinida).
- `validarCadastro`: todas as oito combinações das três condições abaixo.

Foi aplicada a técnica de caixa branca de **cobertura de condições e decisões**:
cada condição assume valores verdadeiro e falso, e o resultado final do cadastro
também é verificado nos dois casos. Os testes exercitam ainda os diferentes
pontos de interrupção da expressão `&&` quando uma condição é falsa.

| Maior de idade | Email com @ | Ativo | Cadastro válido |
| --- | --- | --- | --- |
| Sim | Sim | Sim | Sim |
| Sim | Sim | Não | Não |
| Sim | Não | Sim | Não |
| Sim | Não | Não | Não |
| Não | Sim | Sim | Não |
| Não | Sim | Não | Não |
| Não | Não | Sim | Não |
| Não | Não | Não | Não |

A suíte possui **19 cenários**. 
