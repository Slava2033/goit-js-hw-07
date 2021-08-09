// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
// отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');



// !works dynamically
inputRef.addEventListener('input', (e)=> {nameRef.textContent =  e.target.value;
  if(nameRef.textContent===''){
    nameRef.textContent = 'незнакомец';
  }});

// ! works by enter
// inputRef.addEventListener('change', (e)=> {nameRef.textContent =  e.target.value});