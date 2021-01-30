//zadanie1

const table = ["siemka", 1, 2];
for(let i=0; i<table.length; i++){
    console.log(table[i]);
}

//zadanie 2

const tab = ["pierwszy", "drugi", "trzeci", 4];

console.log(tab[0] + " " + tab[1])
console.log(tab[tab.length -1])
console.log(tab)

for(let i = 0; i<=tab.length; i+=2) {
    console.log(tab[i]);
}

for(let i = 0; i<=tab.length; i++) {
    if(typeof(tab[i]) == "string"){
        console.log(tab[i]);
    }
}

for(let i = 0; i<=tab.length; i++) {
    if(typeof(tab[i]) == "number"){
        console.log(tab[i]);
    }
}

//zadanie 3
/*
#### Zadanie 3

Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:

1. sumę wszystkich elementów
2. różnicę wszystkich elementów
3. średnią wszystkich elementów
4. elementy parzyste
5. elementy nieparzyste
6. największą liczbę
7. najmniejszą liczbę
8. wypisz tablicę od tyłu
*/

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;
for(let x = 0; x<=tab.length-1; x++) {
    suma += tab[x];
}

console.log(suma);

for(let x = 0; x<=tab.length-1; x++) {
    subt -= tab[x];
}

console.log(subt);

average = suma / tab.length;
console.log(average);

tab.forEach(item => {
   if(item%2 == 0) console.log(item);
 });

 tab.forEach(item => {
    if(item%2 == 1) console.log(item);
  });

max = 0;
tab.forEach(item => {
   if (item > max) max = item; 
});
console.log(max);

min = max;
tab.forEach(item => {
   if (item < min) min = item; 
});
console.log(min);

for(let x = tab[tab.length-1]; x>=0; x--) {
    console.log(tab[x]);
}

//zadanie 4

function sum(t){
    var x = 0;
    for(var i = 0; i < t.length; i++){
        x += t[i];
    }
    return x;
}

var table = [1,2,3,4,5,6];

console.log(sum(table));

//zadanie 5


function funct(tab){
    var avg = 0;
    for(var i = 0; i<tab.length; i++){
        avg += tab[i];
    }
    avg = avg / tab.length;
    
    for (var k = 0; k<tab.length; k++){
        console.log(tab[k] * avg);
    }
}

const table = [1,2,6,8,9];

funct(table);

//zadanie 6
function average(table) {
    var sum = 0;
    var length = 0
    table.forEach(item => {
        if (item %2 == 0) {
            sum += item;
            length++;
        }
    })
    return sum / length;
}

console.log(average(new Array(1,2,3,4,5,6)));


//zadanie 7

var table = [1,45,22,2,8,54,5,99,88];
function sortTable(table){
    return table.sort((a,b)=>a-b);
}
console.log(sort(table));

//zadanie 8 
function func(tab1, tab2){
    var resultTab = [];
    for(var i = 0; i< tab1.length; i++){
        resultTab.push(tab1[i] + tab2[i]);
    }
    return resultTab;
}

const table1 = [1,4,6,8];
const table2 = [56,23,3,4];

console.log(func(table1,table2));


// Zadanie 9
/*
Napisz funkcję która przyjmie jako parametr tablice oraz element tablicy. Następnie funkcja ma zwrócić nową tablicę na podstawie pierwszego parametru ale bez elementu z drugiego parametru
 */

function functionNine(tabOne, deleteWord) {
    for(var i = 0; i < tabOne.length; i++) {
        if(tabOne[i] == deleteWord) {
            tabOne.splice(i,1);
        }
    }
    return tabOne;
}

console.log(functionNine(["kot", "pies", "żaba"], "pies"));

//Zadanie 10
/*
Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak.
*/
function changeSign(tabOne) {
    for(var i = 0; i < tabOne.length; i++) {
        tabOne[i] = tabOne[i] * -1;
    }
    return tabOne;
}

console.log(changeSign([1,-2,3,4,-5,6,-7]));