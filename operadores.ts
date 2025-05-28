let a: number = 10;
let b: number = 14;

//Aritiméticos (+, -, *, /, %)
console.log('soma', a + b);
console.log('subtração', a - b);
console.log('multiplicação', a * b);
console.log('divisão', a / b);
console.log('resto', a % b); /*percente*/

//Relacionais 
console.log('igual (==)', a == b);
console.log('diferente (!=)', a != b);
console.log('maior que (>)', a > b);
console.log('menor que (<)', a < b);
console.log('maior ou igual (>=)', a >= b);
console.log('menor ou igual (<=)', a <= b);

//Identidade Restrita
console.log('idêntico', a === b);
console.log('não identico', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//Operador condicional (ternário)
let idade: number = 17;
let acesso = idade >= 18? 'Permitido beijar na boca' : 'Não permitido' /*condicao ? valor se true : valor se false*/