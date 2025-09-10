/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
const mensagem = "Olá, mundo!";
console.log(mensagem);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
const carro = {
    marca: 'Ford',
    modelo: 'Fusion',
    ano: 2020
  };
  
  console.log(carro.modelo); // Acessando a propriedade 'modelo'

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
const cores = ['vermelho', 'verde', 'azul', 'amarelo', 'preto'];

// O terceiro elemento está no índice 2
console.log(cores[2]); 

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
const usuario = {
    nome: 'Alex',
    idade: 28
  };
  
  // Adicionando a nova propriedade 'email' ao objeto 'usuario'
  usuario.email = 'alex@email.com';
  
  console.log(usuario);
  // Saída: { nome: 'Alex', idade: 28, email: 'alex@email.com' }

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const cliente = {
  nome: 'Juliana',
  'endereço completo': 'Rua B, 123'
};

const chave = 'nome';

console.log(cliente[chave]); 

// Também pode ser usado para chaves com espaços
const chaveComEspaco = 'endereço completo';
console.log(cliente[chaveComEspaco]); 

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
const livro = {
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    ano: 1990
  };
  
  function exibirPropriedades(objeto) {
    // O laço for...in percorre as chaves de um objeto
    for (const chave in objeto) {
      // Usamos a notação de colchetes para acessar o valor
      console.log(`${chave}: ${objeto[chave]}`);
    }
  }
  
  exibirPropriedades(livro);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const empresa = {
  nome: 'Tech Solutions',
  localizacao: {
    cidade: 'São Paulo',
    pais: 'Brasil'
  },
  departamentos: ['TI', 'RH', 'Financeiro']
};

// Acessando um valor do objeto aninhado
console.log(empresa.localizacao.cidade); 

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const timesDeFutebol = [
    'Flamengo',   // índice 0
    'Fluminense', // índice 1
    'Vasco',      // índice 2
    'Botafogo'    // índice 3
  ];
  
  console.log(`O índice 0 tem o valor: ${timesDeFutebol[0]}`);
  console.log(`O índice 2 tem o valor: ${timesDeFutebol[2]}`);

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
// Variável com escopo global
const nomeGlobal = "Mundo";

function saudar() {
  // Variável com escopo local
  const nomeLocal = "Olá";
  
  // Acessando ambas as variáveis
  console.log(`${nomeLocal}, ${nomeGlobal}!`);
}

saudar(); 

// Tentativa de acessar a variável local fora da função resultará em um erro
try {
  console.log(nomeLocal);
} catch (e) {
  console.log("Erro: 'nomeLocal' não está definido fora da função.");
}

// A variável global pode ser acessada de qualquer lugar
console.log(nomeGlobal); 

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const produto = {
    nome: 'Teclado Mecânico',
    preco: 250
  };
  
  // Exibindo o valor original
  console.log("Preço original:", produto.preco); 
  
  // Modificando a propriedade 'preco'
  produto.preco = 299;
  
  // Exibindo o novo valor
  console.log("Novo preço:", produto.preco);