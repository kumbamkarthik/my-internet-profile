const value = document.querySelector("#value");
const btnDec = document.querySelector("#btn1");
const btnReset = document.querySelector("#btn2");
const btnInc = document.querySelector("#btn3");
let count=0;
btnDec.addEventListener("click", function(){
    value.textContent = --count;
    if(count<0){
        value.style.color = "red";
    }
})
btnReset.addEventListener("click", function(){
    count=0;
    value.textContent=0;
    value.style.color = "black";
})
btnInc.addEventListener("click", function(){
    value.textContent = ++count;
    if(count>0){
        value.style.color = "green";
    }
})