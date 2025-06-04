// === Array e Metódos de Manipulalção ===

let notas: number[] = [6, 7,5,8,5];

//forEach
//iterar sobre elementos de uma coleção
notas.forEach(n => console.log("Nota:", n)); 

//map
//criar um novo array com os resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 0.5);

//filter
//criar um novo array contendo somente elementos que atendem uma condição específica
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); //adiciona um elemento no final do array
notas.pop(); //remover um elemento no final do array