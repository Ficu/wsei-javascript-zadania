//zadanie 1
/*
Wypisz w konsoli:

1. Rodzica elementu id="buz"
2. Brata elementu id="baz"
3. Dzieci elementu id="foo"
4. rodzica elementu id"foo"
5. pierwsze dziecko elementu id="foo"
6. środkowe dziecko elementu id="foo"
*/

console.log(document.querySelector("#buz").parentElement);
console.log(document.querySelector("#baz").nextElementSibling);

var foo = document.querySelector("#foo");

console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstChild);

var middleElem = () => {
    if(foo.children.length%2 == 0)
        return foo.children.length/2;
    else
        return Math.round((foo.children.length/2));
}

console.log(foo.children[middleElem()-1]);


//zadanie 2
/*
Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.
*/

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

//zadanie 3

const add = (elements) => {
    for(var i = 0; i < elements.length; i++){
       
        elements[i].addEventListener("click", function(){
            /*zadanie4 start */
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
            /*zadanie4 stop*/

            if(this.nextElementSibling.style.display == "none")
            this.nextElementSibling.style.display = "block";
            else
            this.nextElementSibling.style.display = "none";
        })
   }
}

add(document.querySelectorAll('#ex3 button'));


//zadanie 5

let elements = document.querySelectorAll('#ex5 > div');
let listElements = document.querySelectorAll('#ex5 > ul > li');

elements.forEach(elem => {
    elem.addEventListener('mouseover', (event) => {
        let color = event.target.style.backgroundColor;

        listElements[0].style.backgroundColor = color;

        listElements[listElements.length - 1].style.backgroundColor = color;

        listElements.forEach((el, key) => {
            if (key % 2 == 0) {
                el.style.backgroundColor = color;
            }
        });

        listElements.forEach(el => el.style.backgroundColor = color);

        listElements[0].parentElement.style.backgroundColor = color;
    });
})

let finder = document.querySelector('#ex6');

console.log(finder.firstElementChild.firstElementChild.firstElementChild);
console.log(finder.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement);
console.log(finder.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild);