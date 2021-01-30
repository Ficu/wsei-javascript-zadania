//zadanie 1
function printText() {
    console.log("Udało się!");
}

//zadanie 2
function paramFunc(param) {
    console.log(param);
}

paramFunc(25 + " test");

//zadanie 3

let myTab = ["Janusz", "Koleandra", "Papryka"];

function printTab(tab) {
    console.log(tab);
}

//zadanie 4
function printString(str){
    let i=0;
    const timer=setInterval(()=>{
        if(i<5){
            console.log(str);
            i++;
        }else{
            console.log("koniec");
            clearInterval(timer);
        }
    }, 3000);
}
printString("czekaj");