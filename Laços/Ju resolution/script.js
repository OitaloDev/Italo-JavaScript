const resultado1 = [2, 4, 6, 8]
const resultado2 = [1, 3, 5, 7]
const resultado3 = [0, 8, 10, 12]
const resultado4 = [9, 11, 13, 15]


//console.log(megaSena)

/* if(megaSena.length === 4){
    
    for(let i=0; i < megaSena.length; i++){
        //console.log(megaSena[i])
        //console.log('i', megaSena[0])
        
        for(let j=0; j < megaSena[i].length; j++){
            console.log(`Sorteio ${i + 1}: ${megaSena[i]}`)
        } 
        
        //console.log(megaSena[i])
    }
    
}else{
    console.log('É necessário alterar o número de itens do array')
} */


/* const obj = {
    nome:'ju',
    idade: 35,
    altura:'160'
}

for(let i in obj){
    console.log(obj['nome'])
}    */

/* const megaSena = [resultado1, resultado2, resultado3, resultado4]

//console.log(megaSena)

if(megaSena.length === 4){
    
    for(let i in megaSena){
        //console.log(megaSena[i])
        //console.log('i', megaSena[0])
        
        for(let j of megaSena[i]){
          console.log(`Sorteio ${Number(i)+1}: ${megaSena[i]}`)
        } 

        //console.log(megaSena[i])
    }

}else{
    console.log('É necessário alterar o número de itens do array')
}    */

/* const novoArray = [ 'juliana', 'Maria', 'João' ]
console.log(novoArray)

for(let valor of novoArray){
    console.log(valor)
}  */


const filmes = [
    {
        titulo: 'O Auto da Compadecida',
        ano: 2000,
        diretor: 'Guel Arraes',
        elenco: [
            'Selton Mello',
            'Mateus Nachtergaele',
            'Marco Nanini',
            'Fernanda Montenegro',
        ],
    },
    {
        titulo: 'Carandiru',
        ano: 2001,
        diretor: 'Hector Babenco',
        elenco: [
            'Wagner Moura',
            'José Carlos Vasconcelos',
            'Ailton Graça',
            'Caio Blat',
        ],
    },
    {
        titulo: 'Aquarius',
        ano: 2012,
        diretor: 'Kléber Mendonça Filho',
        elenco: [
            'Sônia Braga',
            'Humberto Carrão',
            'Maeve Jinkings',
            'Bárbara Colen',
        ],
    },
]


const notasBimestre = [
    [2, 4, 5],
    [8, 10, 9]
]

//somando 1 em cada nota
/* for (let i = 0; i < notasBimestre.length; i++) {
    for (let z = 0; z < notasBimestre[i].length; z++) {
        const resultado = notasBimestre[i][z] + 1
        console.log(resultado)
    }
} */


//somando cada array
/* 
for (let i = 0; i < notasBimestre.length; i++) {

    let totalCadaArray = 0

    for (let z = 0; z < notasBimestre[i].length; z++) {

        totalCadaArray += notasBimestre[i][z]
        //const resultado = notasBimestre[i][z] + 1 
        //console.log(resultado)
    }

    console.log(totalCadaArray)

} */



/* for(let i=0; i < filmes.length; i++){
   //console.log(filmes[i].titulo, filmes[i].ano, filmes[i].diretor)

   for(let z=0; z < filmes[i].elenco.length; z++){
    console.log(`Tem no elenco: ${filmes[i].elenco[z]}`)
   } 
}  */

/* for(let prop in filmes){
   // console.log(`${filmes[prop].titulo}, ${filmes[prop].ano}, ${filmes[prop].diretor}`)

    for(let valor of filmes[prop].elenco){

       //console.log(valor)
      console.log(`Tem no elenco: ${filmes[prop].elenco}`)
      //console.log(filmes[prop].elenco)
      //console.log(valor)

       //console.log(`Tem no elenco:${valor}`)
    }
}   */


