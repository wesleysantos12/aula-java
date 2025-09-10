/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
const numeros = [10, 20, 30, 40, 50];

// A desestruturação pega os elementos por sua posição no array
const [primeiro, segundo] = numeros;

console.log(primeiro);  // Saída: 10
console.log(segundo);   // Saída: 20

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
const pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: 'Engenheira'
  };
  
  // A desestruturação extrai as propriedades pelo nome
  const { nome, idade } = pessoa;
  
  console.log(nome);  // Saída: Maria
  console.log(idade); // Saída: 29

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
const produto = {
  nome: 'Teclado',
  preco: 150
};

// Extraindo a propriedade 'estoque', que não existe, e definindo um valor padrão de 0
const { nome, estoque = 0 } = produto;

console.log(nome);    // Saída: Teclado
console.log(estoque); // Saída: 0

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const usuario = {
    nome: 'Lucas',
    info: {
      cidade: 'Curitiba',
      idade: 22
    }
  };
  
  // Extraindo 'nome' e, dentro de 'info', extraindo 'cidade'
  const { nome, info: { cidade } } = usuario;
  
  console.log(nome);   // Saída: Lucas
  console.log(cidade); // Saída: Curitiba

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const times = ['Palmeiras', 'Corinthians', 'Santos', 'São Paulo', 'Bragantino'];

// Pegando os dois primeiros times e o restante
const [campeao, vice, ...outros] = times;

console.log(campeao);  // Saída: Palmeiras
console.log(vice);     // Saída: Corinthians
console.log(outros);   // Saída: ['Santos', 'São Paulo', 'Bragantino']

// 6. Troque os valores de duas variáveis usando destructuring.
let a = 10;
let b = 20;

// Antes da troca
console.log(`Antes: a = ${a}, b = ${b}`);

// Trocando os valores com desestruturação
[a, b] = [b, a];

// Depois da troca
console.log(`Depois: a = ${a}, b = ${b}`);

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
// A função recebe um objeto e desestrutura as propriedades 'nome' e 'idade'
function mostrarInfoPessoa({ nome, idade }) {
    console.log(`O nome é ${nome} e a idade é ${idade} anos.`);
  }
  
  const pessoa = {
    nome: 'Lucas',
    idade: 25,
    cidade: 'Fortaleza'
  };
  
  // Chamando a função com o objeto
  mostrarInfoPessoa(pessoa); // Saída: O nome é Lucas e a idade é 25 anos.

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
// A função recebe um objeto e desestrutura suas propriedades
function processarProduto({ nome, preco, emEstoque }) {
  console.log(`Produto: ${nome}`);
  console.log(`Preço: R$ ${preco.toFixed(2)}`);

  if (emEstoque) {
    console.log("Status: Disponível em estoque.");
  } else {
    console.log("Status: Indisponível.");
  }
}

const produto1 = {
  nome: 'Notebook',
  preco: 2500,
  emEstoque: true
};

const produto2 = {
  nome: 'Mouse',
  preco: 50,
  emEstoque: false
};

// Chamando a função para processar cada produto
processarProduto(produto1);
console.log('---');
processarProduto(produto2);

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const usuario = {
    nome: 'Pedro',
    idade: 35,
    email: 'pedro@email.com'
  };
  
  // Extraindo a propriedade 'nome' para a variável 'nomeCompleto'
  // e a propriedade 'email' para a variável 'emailUsuario'
  const { nome: nomeCompleto, email: emailUsuario } = usuario;
  
  console.log(nomeCompleto); // Saída: Pedro
  console.log(emailUsuario); // Saída: pedro@email.com

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
// Função que retorna um array com a temperatura e a umidade
function obterDadosClima() {
  return [25, 60]; // [temperatura, umidade]
}

// Desestruturando o array retornado pela função
const [temperatura, umidade] = obterDadosClima();

console.log(`A temperatura atual é de ${temperatura}°C.`);
console.log(`A umidade relativa do ar é de ${umidade}%.`);