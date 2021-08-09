// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxRef = document.querySelector('#boxes');
const inputRef = document.querySelector('[type="number"]');
const createRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const size = 30;
let sizePlus = 0;


const createBox = function createBoxes(amount){
  sizePlus = 0;
  for (let el = 0; el < amount; el++) {
    boxRef.innerHTML+= `<div class ='box_style'></div>`
  }
  const box = document.querySelectorAll('.box_style');
  box.forEach(el => {
    el.style.width = size + sizePlus +'px';
    el.style.height = size + sizePlus +'px';
    sizePlus += 10;
    el.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
  });
}

const destroyBox = function destroyBoxes(){
  const box = document.querySelectorAll('.box_style');
  box.forEach(el => el.remove());
}

createRef.addEventListener('click', el => createBox(inputRef.value));
destroyRef.addEventListener('click', destroyBox);