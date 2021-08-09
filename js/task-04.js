// Счетчик состоит из спана и кнопок, которые должны увеличивать и 
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const increment = () =>{
  counterValue +=1;
  countValue.textContent = counterValue;
}

const decrement = () =>{
  counterValue -=1;
  countValue.textContent = counterValue;
}

const decrRef = document.querySelector('[data-action="decrement"]');
const incrRef = document.querySelector('[data-action="increment"]');
const countValue = document.querySelector('#value');


decrRef.addEventListener('click',decrement);
incrRef.addEventListener('click',increment);