/*
#### Zadanie 1

Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

* Imię
* Nazwisko
* Wiek
* Kraj
* Miasto

Stwórz metody:

1. Która wypiszą wszystkie informacje o tej osobie
2. Która dodaje 1 rok do wieku za każdym jej wywołaniem

Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.
*/

var person = {
    imie: "Jakub",
    nazwisko: "Ficek",
    wiek: "23",
    kraj: "Polska",
    miasto: "Kraków",
    showInfo () {
        for(key in person) {
            console.log(key + ": " + person[key]);
        }
    },
    addAge () {
        this.wiek++;
    }
};

person.showInfo();

var person2 = {
    imie: "Mariusz",
    nazwisko: "Skowronek",
    wiek: "20",
    kraj: "Polska",
    miasto: "Kraków",
    showInfo () {
        for(key in person) {
            console.log(key + ": " + person2[key]);
        }
    },
    addAge () {
        this.wiek++;
    }
};

person.showInfo();
person.addAge();
person.showInfo();
 

person2.showInfo();
person2.addAge();
person2.showInfo();

/*
#### Zadanie 2

Rozszeż obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu
*/

person.favourite = ["Schabowy", "Naleśniki", "Wołowina"];

person2.favourite = ["Spaghetti", "Makaron rurki", "Sernik"];

person.addFav = (favParam) => {
    person.favourite.push(favParam);
};

person.showFav = () => {
    console.log("Ulubione dania " + person.imie);
    for(key in person.favourite) {
        console.log(person.favourite[key]);
    }
}

person2.addFav = (favParam) => {
    person2.favourite.push(favParam);
};

person2.showFav = () => {
    console.log("Ulubione dania " + person2.imie);
    for(key in person2.favourite) {
        console.log(person2.favourite[key]);
    }
}

person.showFav();
person.addFav("Makaronik");
person.showFav();


/*
Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

1. Metoda zapisująca liczby a i b w kontekście obiektu
2. Metoda sumująca wcześniej zapisane liczby
3. Metoda odejmująca wcześniej zapisane liczby
4. Metoda mnożąca wcześniej zapisane liczby
5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.
*/

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.b = b;
    this.sum = () => {
        return this.a+this.b;
    }
    this.sub = () => {
        return this.a-this.b;
    }
    this.mult = () => {
        return this.a*this.b;
    }
    this.division = () => {
        if(this.b != 0) {
            return this.a/this.b;
        } else {
            console.log("Nie mozna dzielic przez 0");
            return false;
        }
        
    }
}

const calc = new Calculator(5, 0);

console.log(calc.sum());

/*
zadanie 4
Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?
*/

function Ladder(steps) {
    this.steps = steps;
    this.where = 0;
    this.climb = () => {
        if(this.where > 0) {
            console.log("Musisz najpierw zejść z drabiny");
        } else {
            console.log("Rozpoczynamy wchodzenie na drabinę");
            for(int i; i++; i<=this.steps) {
                console.log("Stopien " + this.where++);
            }
        }
    }

    this.getOff = () => {
        if(this.where == 0) {
            console.log("Musisz najpierw wejsc na drabine");
        } else {
            console.log("Rozpoczynamy schodzenie z drabiny");
            for(int i; i++; i<=this.steps) {
                console.log("Stopien " + this.where--);
            }
        }
    }
}

const newLadder = new Ladder(10);

newLadder.climb();
newLadder.climb();

newLadder.getOff();
newLadder.getOff();