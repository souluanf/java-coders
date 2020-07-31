/**
 * 1. Crie uma função que recebe um número e verifica se ele é par ou ímpar. 
 */
function imparPar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é ímpar`)
    }
}
// imparPar(4)

/**
 * 2. Crie uma arrow function que receba um número e verifique se é primo.
 */

function ePrimo(numero) {
    if ((numero < 2) || numero !== Math.round(numero)) {
        return false
    }
    for (let elem = 2; elem <= Math.sqrt(numero); elem++) {
        if (numero % elem === 0) {
            return false;
        }
    }
    return true;
}
// console.log(ePrimo(1))

/**
 * 3. Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback
 * */
function imprimeNumeros(callback) {
    setTimeout(function () {
        for (i=1; i<=10; i++){
            console.log(i)
        }
    callback();
    },3000);
}
function anoNovo() {
    console.log('feliz ano novo')
}

// imprimeNumeros(anoNovo)

/**
 * 4. Faça o mesmo utilizando Promise com concatenação de then
 */


/**
 * 5. Agora repita a função utilizando o método async/await
 * */

/**
 * 6. Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0], construa uma função para imprimir apenas as notas acima de 7
 * */

lista = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0]
function maiorQueSete(element) {
    if(element > 7){
        console.log(element)
    }
}
// lista.forEach(maiorQueSete);

function maiorQueSete2(array) {
    for (let i = 0; i < array.length; i++ ){
        if (array[i] >7.0){
            console.log(array[i])
        }
    }
}
// maiorQueSete2(lista)


/** * 7. Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto e o seu
 *  respectivo preço, agora construa uma função que some todos os valores e te devolva o total. * */
const produtos = [
    {
        produto: 'açucar',
        preco: 2.5
    },
    {
        produto: 'achocolatado',
        preco: 7.5
    },
    {
        produto: 'leite',
        preco: 3.5
    },
    {
        produto: 'café',
        preco: 6.5
    }
];

function somaProdutos1() {
    return produtos.reduce((total,produto) => {
        return total + produto.preco
    },0)
}
// console.log(somaProdutos1())

function somaProdutos2(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++ ){
        total += array[i]['preco']
    }
    return total
}
// console.log(somaProdutos2(produtos))


/** * 8. Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º terão aulas
 *  de física às quartas-feiras. Você deve criar uma função que receba um array de objetos contendo nome e série de
 *  cada aluno e atribua a sua respectiva disciplina da quarta-feira. (O array de alunos deve ser criado como você
 *  desejar contanto que contenha pelo menos 5 alunos). * */

const alunos = [
    {
        nome: 'Marcela',
        serie: '8'
    },
    {
        nome: 'Fernanda',
        serie: '9'
    },
    {
        nome: 'Gustavo',
        serie: '8'
    },
    {
        nome: 'Fernanda',
        serie: '9'
    },
    {
        nome: 'Claudio',
        serie: '8'
    },
];

function turmaAlunos(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i]['serie'] === '8') {
            alunos[i]['disciplina'] = 'história'
        } else {
            alunos[i]['disciplina'] = 'física'
        }
    }
    return alunos
}
console.log(turmaAlunos(alunos))