//zadnie 1 DOPISAC RESZTE OSOB
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    this.setAge = (age) => {
        this.age = age;
    }
    this.setCity = (city) => {
        this.city = city;
    }
}

const personOne = new Person("person1", "test", 20, "Polska", "Krakow", "PL");
const personSecond =  new Person("person2", "test2", 25, "Polska", "Krakow", "PL");

personOne.setAge(15);
personOne.setCity("Warszawa");

console.log(personOne);

//zadanie 2
/*
Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.
*/

function Calculator(numerOne, numberTwo) {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawnaie');
        return a+b;
    }
    this.sub = function (a, b) {
        this.memory.push('Odejmowanie');
        return a-b;
    }
    this.mult = function (a, b) {
        this.memory.push('Mnożenie');
        return a*b;
    }
    this.division = function (a, b) {
        this.memory.push('Dzielenie');
        return a/b;
    }
    this.clearMemory = function () {
        this.memory = [];
    }
}

const calculatorOne = new Calculator();

console.log(calculatorOne.sum(5, 6));
console.log(calculatorOne.mult(5, 6));

console.log(calculatorOne.memory);
console.log(calculatorOne.clearMemory);

console.log(calculatorOne.memory);

/* ZAJECIA */
function Calculator() {
    this.memory = [];
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        return a + b;
    }
    
    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        return a - b;
    }
    
    this.mult = function(a, b) {
        this.memory.push('Monożenie');
        return a * b;
    }
    
    this.div = function(a, b) {
        this.memory.push('Dzielnie');
        return a / b;
    }
    
    this.clear = function(a, b) {
        this.memory = [];
    }
    
}

const calc = new Calculator();
console.log(calc.sum(2,5));
console.log(calc.sum(5,5));
console.log(calc.memory)
calc.clear();
console.log(calc.memory)


//zadanie3
/*
Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. 
setInterval(function(){ alert("Hello"); }, 3000);
*/

function Constructor() { 
    this.number = 0;
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }

    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5) {
            clearInterval(myInterval);
        }     
    }
}

const newProg = new Constructor();

const myInterval = setInterval(() => {
    newProg.setNumber();
}, 1000);

/* wersja 2 */

function Constructor() { 
    this.number = 0;
    this.myInterval = undefined;
    
    this.init = function(){
        this.myInterval = setInterval(() => {
            this.setNumber()
        }, 1000);
    }
    
    this.setNumber = function() { 
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }
    
    this.checkNumber = function() { 
        console.log(this.number)
        if(this.number > 5 && this.myInterval) {
            clearInterval(this.myInterval);
        }     
    }
}

const newProg = new Constructor();
newProg.init();




