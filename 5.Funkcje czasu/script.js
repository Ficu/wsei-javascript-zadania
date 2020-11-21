//zadanie 1
let x = 0;

var n = setInterval(function() {
  if(x == 3) {
    clearInterval(n);
  }
  console.log("Cześć po raz " + x++);
}, 3000);


//zadanie2

let tab = ["Maciek", "Jakub", "Aleksandra"]; 
setTimeout(function() {
    for (let i=0; i<tab.length; i++) {
        console.log(tab[i]);
    }
    i = 0;
    var x = setInterval(function() {
    
        if(tab.length>i) {
        console.log(tab[i++]);
        } else {
            clearInterval(x);
        }
    }, 3000);
}, 2000);
