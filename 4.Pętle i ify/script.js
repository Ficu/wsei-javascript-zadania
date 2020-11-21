let value1 = 10;
let value2 = 20;

if (value1 > value 2) {
    console.log(value1);
} else {
    console.log(value2);
}

// Zadanie 2

var nextValue1 = 145;
var nextValue2 = 68;
var nextValue3 = 44444;

if (nextValue1 > nextValue2 && nextValue1 > nextValue3) {
    console.log(nextValue1);
} else if (nextValue2 > nextValue3) {
    console.log(nextValue2);
} else {
    console.log(nextValue3);
}


// Zadanie 3

for(let i = 0; i++; i<10) {
    console.log("Lubię JavaScript");
}

// zadanie 4

let result = 0;

for(let i = 1; i++; i<=10) {
    result += 1;
}

// zadanie 5

var n = 5;
for(var i = 0; i<=n; i++)
    {
        if(i%2==0)
            {
                console.log("liczba " +i+ " jest parzysta");
            }
        else
            {
                console.log("liczba " +i+ " jest nie parzysta");
            }
   
       
    }

// zadanie 6 

for(let i=0; i< 5; i++){
    for(let j=0; j < 5; j++){
        console.log("i= " + i + ", j= " + j);
    }
    
}

// zadanie 7 

console.log(0);
for(let i = 1; i <=100; i++) {
    if(i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
    } else if(i%3 == 0) {
        console.log("Fizz");
    } else if(i%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//zadanie 8
//a
var x = '*';

for (var i=0;i<5;i++){
    console.log(x);
    x +='*';
}

//b

var x = ' *';
var z = 5;

for (var i=0;i<z;i++){
    var space = '';
    for (var k=0; k<z-i; k++){
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}

