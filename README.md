# Módulo 28 — Testes de unidade com Jest

Testes de unidade para o exercício de validação de cadastro de usuário do módulo 27.

Os testes estão em `usuario.test.js`, ao lado de `usuario.js`, e validam as
quatro funções exportadas sem alterar as regras implementadas no módulo 27.

## Como executar

Com Node.js e npm instalados, execute na pasta do projeto:

```sh
npm ci
npm test
```

O comando `npm test` gera o relatório de cobertura. Abra
`coverage/lcov-report/index.html` no navegador para consultar os detalhes.
A cobertura considera as funções de validação; o bloco de demonstração no console
é excluído da instrumentação. As pastas `node_modules/` e `coverage/` são geradas
localmente e ignoradas pelo Git.

Para executar os exemplos no console:

```sh
node usuario.js
```

Saída esperada:

```text
Usuário 1 válido? true
Usuário 2 válido? false
```

Ao importar `usuario.js` nos testes, esses exemplos não são executados.

## Cenários e técnica aplicada

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
