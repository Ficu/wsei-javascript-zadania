
let anchor = document.querySelector('#root');

//1

let newElem = document.createElement('div');
newElem.innerHTML="To jest nowy element";
anchor.appendChild(newElem);


//2
let fruits = ["Apple", "Banana", "Orange", "Watermelon", "Cherry", "Lemon"];

let newList = document.createElement("ul");

fruits.forEach((elem) => {
    let listElem = document.createElement('li');
    listElem.innerText = elem;

    newList.append(listElem);
});

anchor.appendChild(newList);


//3

newList.addEventListener('click', () => {
    Array.from(newList.children).forEach((elem, i) => {
        if(i % 2 == 0) {
            newList.removeChild(elem);
        }
    });
});


//4

button = document.createElement("button");
button.innerText = "C'MON CLICK ME BABY";
anchor.appendChild(button);

button.addEventListener('click', () => {
    button.remove();
})

//5

for(let i = 0; i<=Math.floor(Math.random()*10); i++) {
    let newElem = document.createElement("div");

    newElem.innerHTML = `to jest div numer ${i}`;

    anchor.appendChild(newElem);
}

//6

var newObj = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

let div = document.createElement("div");
div.innerHTML = newObj.div1;

anchor.appendChild(div);

let span = document.createElement("span");
span.innerHTML = newObj.span1;

let div2 = document.createElement("div");
let div3 = document.createElement("div");
div3.innerHTML = newObj.div2.div3;

div2.appendChild(div3);
anchor.appendChild(div2);

let span2 = document.createElement("span");
span2.innerHTML = newObj.span2;

anchor.appendChild(span2);

//7

let firstList = document.createElement("ul");
firstList.id = "firstList";
for(let i = 1; i<=6; i++) {
    let li = document.createElement("li");
    li.textContent = `Punkt ${i}`;
    firstList.appendChild(li);
}
anchor.appendChild(firstList);

let secondList = document.createElement("ul");
secondList.id = "secondList";
anchor.appendChild(secondList);



let changeButton = document.createElement("button");
changeButton.id = "changeButton";
changeButton.innerText = "NO DALEJ PRZERZUĆ";

let comeBackButton = document.createElement("button");
comeBackButton.id = "comeBackButton";
comeBackButton.innerText = "WRÓĆ PROSZĘ";

anchor.appendChild(changeButton);
anchor.appendChild(comeBackButton);


changeButton.addEventListener('click', function() {
    if(firstList.children.length > 1) {
        let last = firstList.lastChild;
        secondList.appendChild(last);
        comeBackButton.disabled = false;
    } else {
        changeButton.disabled = true;
    }
});

comeBackButton.addEventListener('click', function() {
    if(secondList.children.length > 0) {
        let last = secondList.lastChild;
        firstList.appendChild(last);
        changeButton.disabled = false;
    } else {
        comeBackButton.disabled = true;
    }
});

//zadanie 8

let form = document.createElement("form");

let whatElem = document.createElement("input");
whatElem.placeholder = "Jaki element?";

let textInput = document.createElement("input");
textInput.placeholder = "Jaki tekst?";

let textColor = document.createElement("input");
textColor.placeholder = "Jaki kolor?";

let textTimes = document.createElement("input");
textTimes.placeholder = "Ile razy?";

anchor.appendChild(form);
form.appendChild(whatElem);
form.appendChild(textInput);
form.appendChild(textColor);
form.appendChild(textTimes);

let submitButton = document.createElement("button");

submitButton.textContent = "Utwórz";

form.appendChild(submitButton);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    for(let i = 0; i<textTimes.value; i++) {
        let newElem = document.createElement(whatElem.value);
        newElem.innerText = textInput.value;
        newElem.style.color = textColor.value;
        anchor.appendChild(newElem);
    }
});

//9

let formTab = document.createElement("form");
formTab.id = "namesurnameForm";

let firstName = document.createElement("input");
firstName.placeholder = "Imie";

let surname = document.createElement("input");
surname.placeholder = "Nazwisko";

let age = document.createElement("input");
age.placeholder = "Wiek";

let childrenNumber = document.createElement("input");
childrenNumber.placeholder = "Ilość dzieci";

anchor.appendChild(formTab);
formTab.appendChild(firstName);
formTab.appendChild(surname);
formTab.appendChild(age);
formTab.appendChild(childrenNumber);

let submitButtonTable = document.createElement("button");
submitButtonTable.textContent = "Utwórz";
formTab.appendChild(submitButtonTable);


let more = document.createElement("button");
more.textContent = "Więcej";

formTab.appendChild(more);

more.addEventListener('click', (e) => {
    e.preventDefault();
    let firstName = document.createElement("input");
    firstName.placeholder = "Imie";
    
    let surname = document.createElement("input");
    surname.placeholder = "Nazwisko";
    
    let age = document.createElement("input");
    age.placeholder = "Wiek";
    
    let childrenNumber = document.createElement("input");
    childrenNumber.placeholder = "Ilość dzieci";
    formTab.appendChild(document.createElement("br"));
    formTab.appendChild(firstName);
    formTab.appendChild(surname);
    formTab.appendChild(age);
    formTab.appendChild(childrenNumber);
    
});
/*
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
*/
var table = document.createElement("table");
var tr = document.createElement("tr");   

table.appendChild(tr);
anchor.appendChild(table);

function createTh(name) {
        var th = document.createElement("th");
         th.textContent = name;
        tr.appendChild(th);
}
createTh("Imię");
createTh("Nazwisko");
createTh("Wiek");
createTh("ilość dzieci");
createTh("usun");


submitButtonTable.addEventListener('click', (e) => {
    e.preventDefault();

    var inputs = document.querySelectorAll("#namesurnameForm input");
    let ix = 0;
    for(var i = 0; i<inputs.length/4; i++) {
        let createTr = document.createElement("tr");
        table.appendChild(createTr);
        
        for(var x = 0; x<4; x++) {            
            let createTd = document.createElement("td");
            createTd.innerText = inputs[ix].value;
            createTr.appendChild(createTd);
            ix++;
        }
        let deleteTd = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Usuń";
        deleteButton.addEventListener('click', deleteParent);
        createTr.appendChild(deleteTd);
        deleteTd.appendChild(deleteButton);
    }
});

function deleteParent(e) {
    e.target.parentElement.parentElement.remove();
}


//10
let changeLetterButton = document.createElement('button');
changeLetterButton.id = "change";
changeLetterButton.innerText = "Użyj dużych liter!";
anchor.appendChild(changeLetterButton);  

function changeLetters() {
  document.querySelectorAll('tr').forEach((row) => {
    row.querySelectorAll('td').forEach((cell) => {
      cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
    })
  })
}  

document.querySelector('#change').addEventListener('click', changeLetters);


//11



function checkString(str) {
    var matches = str.match(/\d+/g); 
    var sum = 0;
    var mul = 1;

    for(let i = 0; i<matches.length; i++) {
        sum += parseInt(matches[i], 10);
        mul *= parseInt(matches[i], 10);
    }
    for(let i = 0; i<=mul; i++) {
        let newElem = document.createElement("div");
        newElem.innerText = str;
        anchor.appendChild(newElem);
    }
    return {
        sum: sum
    }
} 
let stringToCheck = "abd2dase5dsowi10";
console.log(checkString(stringToCheck));

//12

function stringSearch(string){
  var object = {
      text: string,
      search: function() {
        if(this.text.indexOf("Ala")>-1) this.text.replace("Ala", "Ola");
        else {
            let div = document.createElement("div");
            div.innerText = "Słowo Ala nie występuje w tekście.";
            anchor.appendChild(div);
        }
      }
  };
  object.search();
}

stringSearch("Ala ma narty");

//13

function lettersNumber(stringArray){  
    var lettersNumber = [];
      for(var i = 0; i < stringArray.length; i++){
        lettersNumber[i] = stringArray[i].length;
      }     
       return lettersNumber;
}
  
function calcAvg(summ, number){
      var avg = summ / number;
      return avg;
}
  
function sum(howManyLetters){
      var sumary = howManyLetters.reduce((prev,curr) => prev += curr);
      return sumary;
}


var tabWords = ['Hello','world','is','popular','start', 'of', 'each'];
let numberOfLetters = lettersNumber(tabWords);

console.log("Number of letters in each word:" + numberOfLetters);


console.log("Sum of letters:" + sum(numberOfLetters));
console.log("Avg: " + calcAvg(sum(numberOfLetters), numberOfLetters.length));



//14

let newObj3 = {
    name: '',
    surname: '',
    age: ''
}

function newName(obj, name) {
    obj.name = name;
    obj.nameLength = name.length;
    if(name.length > 5) {
        reset();
    }
}

function newSurname(obj, surname) {
    obj.surname = surname;
    obj.surnameLength = surname.length;
    if(surname.length > 5) {
        reset();
    }
}

function newAge(obj, age) {
    obj.age = age;
    obj.ageLength = age.length;
    if(age.length > 5) {
        reset();
    }
}
newName(newObj3, "Kuba");
newAge(newObj3, 18);
newSurname(newObj3, "Brzeczyszczykiewicz")
console.log(newObj3); 

function reset() {
    let resetButton = document.createElement("button");
    resetButton.textContent = "WYCZYŚĆ OBIEKT";
    resetButton.addEventListener("click", () => {
        newObj3 = {name: '', surname: '', age: ''};
        console.log(newObj3);
    });
    anchor.appendChild(resetButton);
}