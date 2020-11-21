/*
#### Zadanie 1

Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli

*/

var car = {
    make: "Mercedes",
    color: "Grey",
    year: "2020"
};

console.log(car);

/*
#### Zadanie 2

Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego nazwę na podstawie parametru przekazanego z wywołania metody.

*/

var car.changeName = function(name) {
        Object.assign(name, this);
        return name;
    }
var mercedes = {};
car.changeName(mercedes);

console.log(mercedes);

/*
#### Zadanie 3

Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.

*/

var sumObj = {
    sum: 0,
    sumMethod(tab) {
        tab.forEach(item => {
            this.sum += item;
        });
    }
}
var tab = [1, 2, 3, 4, 5];
sumObj.sumMethod(tab);

console.log(sumObj.sum);

/*
#### Zadanie 4

Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

name: BMW
age: 12
...

Czy pary klucz wartość.
*/
 
var newCar = {
    name: "BMW",
    age: 12,
    color: "Black",
    price: 1200
}

console.log(newCar);
/*
#### Zadanie 5

Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.
*/
car.newColors = {
    color1: "Brown",
    color2: "Green"
}

console.log(car.newColors);
/*
#### Zadanie 6

Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.

*/

car.absSystem = "yes";

car.helloFunction = function() {
    console.log("Hello");
};