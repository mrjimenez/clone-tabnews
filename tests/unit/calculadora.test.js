const calculadora = require("../../models/calculadora");

test("nome do teste", () => {
  console.log("Esta função está sendo chamada?");
});

test("Testando outra condição do meu sistema.", () => {
  console.log("Outro teste.");
});

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
