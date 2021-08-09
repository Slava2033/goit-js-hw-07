// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//  если неправильное - красным.

const targetInput = document.querySelector("#validation-input");
const dataLength = targetInput.getAttribute("data-length");

const toCompare = function (e) {
 let targetLeng = e.target.value.length;
  if (targetLeng === Number(dataLength)) {
    targetInput.classList.remove("invalid");  
    targetInput.classList.add("valid");
  } else targetInput.classList.add("invalid") 
}
targetInput.addEventListener("input", toCompare)