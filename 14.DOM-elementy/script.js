//1 

let moreDivsEl = document.getElementsByClassName("more-divs");

function tagsSearch(getArray) {
    let newArray = [];
    for(let i = 0; i<getArray.length; i++) {
        newArray.push(getArray[i].tagName);
    }
    return newArray;
}

console.log(tagsSearch(moreDivsEl));

//2

function ex2 (param) {
    console.log(param.outerHTML);
    console.log(param.outerHTML);
    console.log([...param.classList].join(', '));
    console.log([...param.classList]);
    console.log(param.dataset);
}

ex2(document.querySelector(".short-list"));

//3

function subAndAdd(...int) {
    return {
        add: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),
        sub: int.reduce((prev, curr) => prev - curr),
    }
}

let query = document.querySelector('#datasetCheck').dataset;
console.log(subAndAdd(query.numberone, query.numbertwo, query.numberThree));

//4

document.getElementById('spanText').textContent = "Dowolny";

//5

document.getElementById('spanText').classList.add("Dowolna");


//6
function classManipulate(element) {
    let classList = [...element.classList];
    classList.forEach((el) => {
        console.log(el);
    });
    let string = classList.join(" + ");
    console.log(string);

    element.classList = '';
    console.log("Usunięto wszystkie klasy");
}

classManipulate(document.getElementById('classes'));

//7

function addingData(param) {
    param.forEach((elem) => {
        if(!elem.hasAttribute("data-text")) {
            elem.dataset.text = "text";
        }
    });
}
addingData(document.querySelectorAll("#longList li"));

//8

function stringObject(param) {
    var newObj = {
        newClass: param
    }
    secStringObject(newObj);    
}

function secStringObject(param) {
    document.querySelector('#myDiv').classList.add(param.newClass);
}

stringObject("stringDoParametru");


//9
function evenOdd(param) {
    let ref = document.getElementById('numbers');

    if(param%2 == 0) {
        ref.classList = "even";
    } else {
        ref.classList = "odd";
    }
}

evenOdd(Math.floor(Math.random()*10));

//10

function tabReturn(param) {
    var content = [];

    param.querySelectorAll("li").forEach((elem) => {
        content.push(elem.textContent);
    });

    return content;
}

console.log(tabReturn(document.getElementById("longList")));

//11

function childList(param) {
    let children = [...param];

    children.forEach((elem) => {
        let rand =  Math.round(Math.random() * 10);
        console.log(rand);
        elem.dataset.oldValue = elem.textContent;
        elem.textContent = rand;
    });
}

childList(document.getElementById("longList").children);
