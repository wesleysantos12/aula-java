/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.
function somar(a, b) {
    return a + b;
  }
  
  // Exemplo de uso:
  console.log(somar(5, 3)); // Saída: 8

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
const converterParaMaiusculas = (texto) => {
  return texto.toUpperCase();
};

// Exemplo de uso:
console.log(converterParaMaiusculas("olá mundo!")); // Saída: OLÁ MUNDO!

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.
const saudar = (nome = "Visitante") => {
    return `Olá, ${nome}! Bem-vindo(a).`;
  };
  
  // Exemplo de uso com valor padrão:
  console.log(saudar()); // Saída: Olá, Visitante! Bem-vindo(a).
  
  // Exemplo de uso com um valor fornecido:
  console.log(saudar("Ana")); // Saída: Olá, Ana! Bem-vindo(a).

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.
const calcularMedia = (...numeros) => {
  if (numeros.length === 0) {
    return 0;
  }
  
  const soma = numeros.reduce((total, numero) => total + numero, 0);
  return soma / numeros.length;
};

// Exemplo de uso:
console.log(calcularMedia(10, 20, 30));        // Saída: 20
console.log(calcularMedia(5, 5, 5, 5, 5));     // Saída: 5
console.log(calcularMedia());                  // Saída: 0

// 5. Crie uma função que retorna outra função que adiciona um número fixo.
// A função externa 'criarAdicionador' recebe um número 'x'
function criarAdicionador(x) {
    // Ela retorna uma nova função
    return function(y) {
      // Essa nova função tem acesso a 'x' (closure) e soma 'x' com 'y'
      return x + y;
    };
  }
  
  // Criando uma função que sempre adiciona 5
  const adicionar5 = criarAdicionador(5);
  
  // Usando a nova função
  console.log(adicionar5(10)); // Saída: 15
  console.log(adicionar5(20)); // Saída: 25
  
  // Criando outra função que sempre adiciona 100
  const adicionar100 = criarAdicionador(100);
  
  console.log(adicionar100(1)); // Saída: 101

// 6. Escreva uma IIFE que imprima "Função autoexecutada".
(function() {
  console.log("Função autoexecutada");
})();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.
const usuario = {
    nome: 'Lucas',
    
    // Função tradicional: o `this` se refere ao próprio objeto 'usuario'
    apresentarTradicional: function() {
      console.log(`Função tradicional: ${this.nome}`);
    },
    
    // Arrow function: o `this` herda o escopo do objeto pai (neste caso, o próprio 'usuario')
    apresentarArrow: () => {
      // Note: Em um ambiente de navegador, `this` em uma arrow function de nível superior
      // pode se referir ao objeto 'window'. Em um ambiente de Node.js, ele pode ser um objeto vazio.
      // Aqui, ele se refere ao contexto lexical de 'usuario', então funciona como esperado.
      console.log(`Arrow function: ${this.nome}`);
    }
  };
  
  // Testando as funções
  usuario.apresentarTradicional(); 
  usuario.apresentarArrow(); 
  
  // Explicando a diferença
  console.log("\n---");
  console.log("Diferença no 'this':");
  console.log("Na função tradicional, 'this' refere-se ao objeto que a invoca (o 'usuario').");
  console.log("Na arrow function, 'this' não tem seu próprio valor e herda do contexto léxico, ou seja, do escopo onde foi definida.");

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.
function imprimirValores({ nome, idade, cidade }) {
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Cidade: ${cidade}`);
}

const pessoa = {
  nome: 'Carla',
  idade: 32,
  cidade: 'Belo Horizonte'
};

// Chamando a função e passando o objeto
imprimirValores(pessoa);

// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.
function trocarValores(a, b) {
    // A desestruturação cria um array temporário e reatribui os valores
    [a, b] = [b, a];
    
    // Retorna os valores trocados
    return [a, b];
  }
  
  let x = 10;
  let y = 20;
  
  console.log(`Antes da troca: x = ${x}, y = ${y}`);
  
  // Chamando a função e desestruturando o array de retorno
  [x, y] = trocarValores(x, y);
  
  console.log(`Depois da troca: x = ${x}, y = ${y}`);

// 10. Crie uma função recursiva que calcula o fatorial de um número.
function fatorial(n) {
  // Caso base: Se o número for 0 ou 1, o fatorial é 1
  if (n <= 1) {
    return 1;
  }
  
  // Passo recursivo: n * fatorial de (n-1)
  return n * fatorial(n - 1);
}

// Exemplo de uso:
console.log(fatorial(5));  // Saída: 120 (5 * 4 * 3 * 2 * 1)
console.log(fatorial(3));  // Saída: 6 (3 * 2 * 1)
console.log(fatorial(0));  // Saída: 1