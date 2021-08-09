  
// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию в 
// список ul.ingredients. Для создания DOM-узлов используй 
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 //!1
 //const ulRef = document.querySelector('ul');
 //ingredients.forEach(el => ulRef.innerHTML+= `<li>${el}</li>`);

!2
const ingredientsRef = document.querySelector('#ingredients');
const makeIngredients = option => {
  return option.map(option => {
    const liRef = document.createElement('li');
    liRef.textContent = option;
    console.log(liRef);

    return liRef;
  });
};

const elements = makeIngredients(ingredients);
ingredientsRef.append(...elements);

 