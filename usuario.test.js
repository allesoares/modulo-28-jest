const {
  verificarMaiorIdade,
  validarEmail,
  usuarioAtivo,
  validarCadastro
} = require('./usuario')

describe('verificarMaiorIdade', () => {
  // Análise de valor limite: abaixo, no limite e acima dos 18 anos.
  test.each([
    [17, false],
    [18, true],
    [19, true]
  ])('para idade %i deve retornar %s', (idade, esperado) => {
    expect(verificarMaiorIdade(idade)).toBe(esperado)
  })
})

describe('validarEmail', () => {
  // A regra do exercício exige apenas a presença de @.
  test.each([
    ['carlos@email.com', true],
    ['anaemail.com', false],
    ['', false]
  ])('para email "%s" deve retornar %s', (email, esperado) => {
    expect(validarEmail(email)).toBe(esperado)
  })
})

describe('usuarioAtivo', () => {
  test.each([
    [true, true],
    [false, false],
    ['true', false],
    [1, false],
    [undefined, false]
  ])('para ativo=%p deve retornar %s', (ativo, esperado) => {
    expect(usuarioAtivo({ ativo })).toBe(esperado)
  })
})

describe('validarCadastro - cobertura de condições e decisões', () => {
  // Exercita as oito combinações de maiorIdade && emailValido && ativo,
  // incluindo a interrupção da expressão && em cada condição falsa.
  test.each([
    [18, 'carlos@email.com', true, true],
    [18, 'carlos@email.com', false, false],
    [18, 'carlosemail.com', true, false],
    [18, 'carlosemail.com', false, false],
    [17, 'carlos@email.com', true, false],
    [17, 'carlos@email.com', false, false],
    [17, 'carlosemail.com', true, false],
    [17, 'carlosemail.com', false, false]
  ])(
    'idade=%i, email="%s", ativo=%s deve resultar em cadastro=%s',
    (idade, email, ativo, esperado) => {
      const usuario = { nome: 'Carlos', idade, email, ativo }

      expect(validarCadastro(usuario)).toBe(esperado)
    }
  )
})
