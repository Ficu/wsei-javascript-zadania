//zadanie3
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