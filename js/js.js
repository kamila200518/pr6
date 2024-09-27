'use strict';


let div = document.body.children[0];
let ul = document.body.children[1];
let pit = document.body.children[1].lastElementChild;
console.log(div, ul, pit)



const listItems = document.querySelectorAll("li");

for (const item of listItems) {
  item.classList.add("list-item");
}



let num = +prompt("Введите цифру");

for (let i = 0; i < num; i++){
  let div = document.createElement('div');
  document.body.children[1].after(div)
}


let form = document.createElement('form');
form.className = "form";
let name = document.createElement('input');
name.placeholder = "Имя"
let email = document.createElement('input');
email.placeholder = "Почта";
let submit = document.createElement('input');
submit.value = "Отправить";
submit.type = "submit"

document.getElementById('form').prepend(form)
document.querySelector('form').append(name);
document.querySelector('form').append(email);
document.querySelector('form').append(submit);