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
            this.nextElementSibling.style.display = "block";
        })
   }
}

add(document.querySelectorAll('#ex3 button'));

//UKRYCIE DO DOROBIENIA