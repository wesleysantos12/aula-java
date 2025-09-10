/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const cachorro = { 
    nome: "Shirley", 
    idade: "14" ,
    Raca: "Spitz Alemao"
     };
console.log(cachorro);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
// Acessando a propriedade 'marca' usando a notação de ponto.
console.log(carro.marca); // Saída: Ford

// Acessando a propriedade 'modelo' usando a notação de colchetes.
console.log(carro['modelo']); // Saída: Mustang

// 3. Adicione uma nova propriedade ao objeto depois de criado.
// Adicionando a propriedade 'cor' ao objeto 'carro'.
carro.cor = 'Vermelho';

// Exibindo o objeto atualizado.
console.log(carro);

// Saída esperada: { marca: 'Ford', modelo: 'Mustang', ano: 1969, cor: 'Vermelho' }

// 4. Remova uma propriedade do objeto.
// Removendo a propriedade 'ano' do objeto 'carro' usando 'delete'.
delete carro.ano;

// Exibindo o objeto atualizado.
console.log(carro);

// Saída esperada: { marca: 'Ford', modelo: 'Mustang', cor: 'Vermelho' }

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
// Adicionando o método 'getDescricao' ao objeto 'carro'.
carro.getDescricao = function() {
    return `Este é um ${this.cor} ${this.marca} ${this.modelo}.`;
  };
  
  // Chamando o novo método e exibindo o resultado.
  console.log(carro.getDescricao());
  
  // Saída esperada: Este é um Vermelho Ford Mustang.

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const pessoa = {
  nome: 'João',
  idade: 30,
  endereco: {
    rua: 'Rua das Flores',
    cidade: 'São Paulo',
    cep: '01000-000'
  }
};

// Acessando a propriedade 'cidade' do objeto aninhado 'endereco'.
console.log(pessoa.endereco.cidade); // Saída: São Paulo

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
// Usando 'for...in' para iterar sobre o objeto 'pessoa'.
for (const chave in pessoa) {
    // Verificando se a propriedade pertence ao próprio objeto (boa prática).
    if (pessoa.hasOwnProperty(chave)) {
      console.log(`${chave}: ${pessoa[chave]}`);
    }
  }
  
  // Saída esperada:
  // nome: João
  // idade: 30
  // endereco: [object Object]

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const produtoOriginal = {
  nome: 'Notebook',
  preco: 2500
};

// Clonando o objeto usando o operador spread (...).
const produtoClone = { ...produtoOriginal };

// Alterando uma propriedade no objeto clonado.
produtoClone.preco = 2300;

// Exibindo os dois objetos para mostrar que a alteração não afetou o original.
console.log('Original:', produtoOriginal); // Saída: Original: { nome: 'Notebook', preco: 2500 }
console.log('Clone:', produtoClone);     // Saída: Clone: { nome: 'Notebook', preco: 2300 }

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const objetoA = { valor: 1 };
const objetoB = { valor: 1 };

console.log(objetoA === objetoB); // Saída: false

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const configuracoes = {
    tema: 'claro',
    idioma: 'pt-br'
  };
  
  // Congelando o objeto 'configuracoes'.
  Object.freeze(configuracoes);
  
  // Tentando alterar uma propriedade (essa alteração será ignorada).
  configuracoes.tema = 'escuro';
  
  // Tentando adicionar uma nova propriedade (também será ignorada).
  configuracoes.notificacoes = true;
  
  // Exibindo o objeto. Ele permanece inalterado.
  console.log(configuracoes);
  
  // Saída esperada: { tema: 'claro', idioma: 'pt-br' }