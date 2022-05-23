// ===String===
// let text = 'string'
// let text2 = 'string2'

// console.log(text+text2);
// console.log('${text} ${num} ${text2}');
// console.log(text+num);
// let num = 100
// let num1= '100'
// let num2= '20'
// console.log(num1+num2);
// console.log(num + num1);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// При умножении или делении а также вычитания происходит
// преоброзование типа строки в число, и идет подсчет
// console.log(text - num) ответ NaN - Not a Number
// console.log(text * num) ответ NaN - Not a Number
// console.log(text / num) ответ NaN - Not a Number

// ===Number===
// let first = 10
// let second = 14.11

// console.log(first + second);
// console.log(first - second);
// console.log(first * second);
// console.log(first / second);

// let n = 10
// let n2 = 0
// console.log(n / n2); придет ответ Infinity - бесконечность
// console.log(n2 / n); придет ответ 0

// ===Boolean ===
// В прогромировании 0 = false 1 = true
// let bool1 = true //истина
// let bool2 = false //не истина

// console.log(bool1, bool2);
// console.log(5>5); false
// console.log( 5==5); true
// console.log( 5>=5); true
// console.log( 5 <= 5 ); true
// console.log(5 === 5 );  //проверяет на тип данных - true
// console.log('5' === 5 ); //проверяет на тип данных - false
// console.log('5' == 5 ); //проверяет на тип данных - true
// console.log('5' !=5 ); //false 
// console.log('5' !==5 ); //true
// != не равно
// !== строгое не равно проверяет и на тип данных
// console.log('5' !=4 ); //true

// const great =5 > 1
// console.log(great); //true

// Логическое операторы======
// = присваивание 
// == знак равенства не проверяет на тип данных
// === строгое равно проверяет на тип данных
// > больше
// >= больше или равно
// <= меньше илт равно 
// < меньше
// ! частица не
// != не равно
// !== не равно проверка на тип данных

//Null ====
// const a = null
// console.log(a);

// //  Undefined ===
// const b = undefined
// console.log(undefined)

// // Bigint ====
// const c = Math.pow(20,200)
// console.log(c);

// const name= prompt('Представьтесь?');
// alert(`${name}:Hello `)

// const a = +prompt('Введите 1-ое число?')
// const b = +prompt('Введите 2-ое число?')
// const c = +prompt('Введите 3-ое число?')
// const d = +prompt('Введите 4-ое число?')

// alert(`${a+b}
// ${c+d} ${a+b>c+d}`)

// let age = prompt('when were you born')
// let num = 2022
// alert(`${num-age}`)

// let income = prompt('How much do you earn per month?')
// let expenditure = prompt('How much do you spend per month?')
// let net = income-expenditure
// // let day = income/30
// let saving = 0.1*net
// let turkey = 42500/saving
// alert(`
// total income: ${income}
// expenses: ${expenditure}
// save: ${saving}
// When can you go: ${turkey} till you can go to Turkey
// `)
