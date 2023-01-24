// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

//Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
//[3, 2, 1, 4, 7] retorna 5
// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
   return array.length
}


//Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
//Exemplo: Para o array `[8, 23, 16, 10]` dado como entrada, retorne `[10, 16, 23, 8]`
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}





//Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a,b)=> a - b)
  
  return array

  
}
//Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
//[1, 2, 3, 4, 5, 6] deve retornar [2, 4, 6]
// EXERCÍCIO 04
function retornaNumerosPares(array) {
   return array.filter((a) => a % 2 == 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((a) => a % 2 == 0).map((a) => a ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = -0
  let i = 0
  if(i<array.length){
   if(array[i]> numeroMaior){
      numeroMaior = array[i]
   }
   i++
  }
   return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = (a, b)
  if(maiorNumero){
    a > b
    return a
  }else 
    return b
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}