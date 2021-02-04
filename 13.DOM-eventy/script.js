

var btn = document.querySelector('#test-event');
btn.addEventListener("click", function (event) {
 
  console.log(event.type);
});

btn.addEventListener("mouseover", function (event) {
  
  console.log(event.type);
});

addEventListener("mousemove", function (event){
  
  console.log(event.type);
});

addEventListener("keypress", function (event){

  console.log(event.type);
});

addEventListener("scroll", function (event){

  console.log(event.type);
});

document.querySelector('#input-test').addEventListener("change", function (event){

  console.log(event.type);
});

//2

document.querySelector('#ex2').addEventListener('click', (event) => {
  event.target.nextElementSibling.innerText = event.target.dataset.text;
});

//3

function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}
switchColor();

//4
document.querySelector("#input-test").addEventListener('keydown',function(key){
let errorSpace = document.querySelector("#ex3-err");
   if(key.keyCode > 47 && key.keyCode < 58) {
       errorSpace.textContent = "You cannot enter numbers";
   }
  });

//TUTAJ TROCHĘ EKSPERYMENTOWAŁEM Z TYM ŻEBY OSTRZEŻENIE USUWAŁO SIĘ PO USUNIĘCIU LICZB
//
// document.querySelector("#input-test").addEventListener('keydown',function(key){
//   let checkNumbers = /^[0-9]+$/;
//   if (document.querySelector("#input-test").value.match(checkNumbers)) {
//     errorSpace.textContent = "You cannot enter numbers";
//   } else {
//     errorSpace.textContent = "ok";
//   }
  //  if(key.keyCode > 47 && key.keyCode < 58) {
  //      errorSpace.textContent = "You cannot enter numbers";
  //  } else if (document.querySelector("#input-test").value.match(checkNumbers)) {

  //     errorSpace.textContent = "NaN";
  //  }
 //});

 //5
let counter = 0;

document.querySelector("#ex5-button").addEventListener("click",function() {
  if(counter < 10) {
    document.querySelector("#ex5 span").textContent = ++counter;
  } else {
    counter = 0;
    document.querySelector("#ex5 span").textContent = ++counter;
  }
});

//6

window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
      document.body.style.backgroundColor = "red";
  } else {
      document.body.style.backgroundColor = "white";
  }
});

//7 tylko dodwaniae zrobione
var input = document.querySelector("div#calculator > input");
var buttons = document.querySelectorAll("div#calculator button");
var number = 0;
var number2 = 0;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(this.innerText === '+'){
            input.value = number + number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '-'){
            input.value = number - number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '*'){
            input.value = number * number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '/' && number != 0){
            input.value = number / number2;
            number = 0;
            number2 = 0;
        } else {
            if(number === 0){
                input.value = '';
                number = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
            
        }
        
        
    });
}