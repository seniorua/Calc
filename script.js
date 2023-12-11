// const string = '9 8 7 6 5 4 3 2 1 0 = + - × ÷ % √ x² ± , C CE ⌫';
const string = '9 8 7 6 5 4 3 2 1 0 = + - × ÷ √ ^ ± . C ⌫';
const symbols = string.split(' ');
// console.log('symbols: ', symbols);

const container = document.querySelector('.container');
const screen = document.createElement('div');
screen.classList.add('screen');
const field1 = document.createElement('input');
const field2 = document.createElement('input');

field1.classList.add('field1');
field2.classList.add('field2');
field1.setAttribute('type', 'text');
field2.setAttribute('type', 'text');
field1.setAttribute('readonly', null);
field2.setAttribute('readonly', null);

field1.value = '0';
screen.append(field2, field1);
container.append(screen);

const keys = document.createElement('div');
keys.classList.add('keys');
container.append(keys);
symbols.forEach((element, i) => {
  const key = document.createElement('div');
  const p = document.createElement('div');
  key.classList.add('key');
  key.textContent = element;
  p.append(key);
  keys.append(p);
  // console.log(element);
});

keys.addEventListener('click', (e) => {
  console.log('e: ', e);
  let target = e.target.innerText;
  calculate(target);
  // console.log('target: ', target);
  
});

document.addEventListener('keydown', (e) => {
  if(symbols.includes(e.key))
  // console.log(e.key);
  calculate(e.key)
});

function calculate(n){
  // if(n === "="){
  //   console.log('Равно...');
  // }
  switch(n){
    case('9'):
      field1.value += '9';
      break;
    case('8'):
      field1.value += '8';
      break;
    case('7'):
      field1.value += '7';
      break;
    case('6'):
      field1.value += '6';
      break;
    case('5'):
      field1.value += '5';
      break;
    case('4'):
      field1.value += '4';
      break;
    case('3'):
      field1.value += '3';
      break;
    case('2'):
      field1.value += '2';
      break;
    case('1'):
      field1.value += '1';
      break;
    case('0'):
      field1.value += '0';
      break;
    case('='):
      // console.log('Равно...');
      break;
    case('+'):
      break;
    case('-'):
      break;
    case('×'):
      break;
    case('÷'):
      break;
    case('%'):
      break;
    case('√'):
      break;
    case('^'):
      break;
    case('±'):
      break;
    case('.'):
      field1.value += '.';
      break;
    case('C'):
      field1.value = '0';
      break;
    // case('CE'):
    //   break;
    case('⌫'): // Удаляем сзади если пусто записываем 0
      a = field1.value.slice(0, -1);
      field1.value = a;
      if (field1.value.length === 0) field1.value = '0';
      // console.log('field1.value: ', field1.value.length);
      break;
    default: break;
  }
  // если символы добавляються, то 0 спереди удаляется,
  // если только 0 не перед точкой
  if(field1.value.length > 1 && field1.value[0] === '0' && field1.value[1] !== '.'){
    a = field1.value.slice(1);
    field1.value = a;
    // console.log('a: ', a);
  }
}
