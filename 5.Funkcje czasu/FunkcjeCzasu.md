#### Zadanie 1

Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. Jeśli Licznik dojdzie do 15 zatrzymaj go. 

### Zadanie 2

Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy.

let tab = ["Maciek", "Jakub", "Aleksandra"]; 
setTimeout(function() {
for (let i=0; i<tab.length; i++) {
    console.log(tab[i]);
}
i = 0;
setInterval(function() {
    if(tab.length<i) {
    console.log(tab[i++]);
}

}, 3000);

}, 2000);