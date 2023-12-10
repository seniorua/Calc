const string = '9 8 7 6 5 4 3 2 1 0 = + - × ÷ % √ x² ± , C CE ⌫';
const symbols = string.split(' ');
console.log('symbols: ', symbols);

const container = document.querySelector('.container');
const screen = document.createElement('div');
screen.classList.add('screen');
const field1 = document.createElement('div');
const field2 = document.createElement('div');

field1.classList.add('field1');
field2.classList.add('field2');
field1.textContent = '0';
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
  console.log(element);
});

keys.addEventListener('click', (e) => {
  console.log('e: ', e);
  let target = e.target.innerText;
  console.log('target: ', target);
  switch(target){
    case('9'):
    case('8'):
    case('7'):
    case('6'):
    case('5'):
    case('4'):
    case('3'):
    case('2'):
    case('1'):
    case('0'):
    case('='):
    case('+'):
    case('-'):
    case('×'):
    case('÷'):
    case('%'):
    case('√'):
    case('x²'):
    case('±'):
    case(','):
    case('C'):
    case('CE'):
    default: break;
  }
})