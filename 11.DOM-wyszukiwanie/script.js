//zadanie 1
/*
Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej
*/

var listElements = document.querySelectorAll(".list");

console.log(listElements);

//zadanie 2
/*
Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.
*/

function search(tag) {
    return document.getElementsByTagName(tag);
}

var listTags = search("li");
console.log(listTags);

//zadanie 3
/*
Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej. 
*/

var listElement = document.querySelectorAll("#list li");

//zadanie 4
/*
Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

1. wszystkie elementy li na stronie
2. wszystkie elementy ul na stronie
3. wszystkie spany na stronie
4. wszystkie spany znajdujące się w elemencie div z klasą list
5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"
*/

function nextFunction(param) {
    console.log(document.querySelectorAll(param));
}
nextFunction("li");
nextFunction("ul");
nextFunction("span");
nextFunction("div.list span");
nextFunction("div#spans span");