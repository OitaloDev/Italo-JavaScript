const arrayNumeros = [3, 8, 4, 5, 7, 10, 20, 2]
//const outroArray = [2, 5]



const multiplicarPorTres = (array) => {
    const novoArray = []

    for (element of array) {
        novoArray.push(element * 3)
    }

    return novoArray
}

//console.log(multiplicarPorTres(arrayNumeros))

const arrayRegiane = [4, 8, 3]

const retornarPar = (arr) => {
    const novoArray = []

    for (element of arr) {
        if (element % 2 === 0) {
            novoArray.push(element)
        }
    }

    return novoArray
}

const imprimir = (callback, array) => {
    const resultado = callback(array)
    console.log(resultado)
}

//imprimir(multiplicarPorTres, arrayRegiane)
//imprimir(multiplicarPorTres, arrayNumeros)
//imprimir(retornarPar, arrayNumeros)



const resultadoMultTres = arrayNumeros.map(
    (cadaElemento) => cadaElemento * 3
)
//console.log(resultadoMultTres)


/* const arrayFiltradoPar = arrayNumeros.filter((element)=>{
    if(element % 2 === 0){
        return element
    }
}) */

const arrayFiltradoPar = arrayNumeros.filter((element) => element % 2 === 0)

//console.log(arrayFiltradoPar)
//console.log(arrayNumeros)


/*** EXERCÍCIO DE FIXAÇÃO */

// Exemplo percorrendo o array 
//não foi o que o exercício pediu, fiz só para mostrar


/* const aumentarVida = (arrayPoke) => {
    const novoArray = []

    for(element of arrayPoke){
        const novoObj = {
            ...element,
            vida: 100
        } 
        novoArray.push(novoObj)
    }
    return novoArray
} */

const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const aumentarVida = (objeto) => {
    const novoObj = {
        ...objeto,
        vida: 100
    }
    return novoObj
}


const pokemonsVidaCheia = pokemons.map(aumentarVida)
//console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((cadaElemento)=>{return cadaElemento.tipo === 'fogo'})

console.log(pokemonsDeFogo)




// Pedido do aluno

/* const pokemonsPorNome = pokemons.filter((cadaElemento)=>{
    return cadaElemento.nome === 'Charmander' && cadaElemento
})

console.log(pokemonsPorNome) */































//console.log(retornarPar(arrayNumeros))

/*** callback */

/* const somar = (num) => {
    return num + 2
}

const imprimirNoConsole = (funcao, num) => {
    console.log(funcao(num))
}


imprimirNoConsole(somar, 40) */

