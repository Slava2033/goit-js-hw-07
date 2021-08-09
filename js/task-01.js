// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст 
// заголовка элемента (тега h2) и количество элементов в категории 
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const ulRef = document.querySelector('ul');
const liRef = [...ulRef.children];
console.log(`В списке ${liRef.length} категории`);

liRef.forEach(el => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  const liUlRef = el.lastElementChild;
  console.log(`Количество элементов: ${liUlRef.children.length}`);
});