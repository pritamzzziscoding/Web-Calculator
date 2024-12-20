let state = false;

const buttonOnOff = document.querySelector(".on-off");
const history = document.querySelector("p");
const input = document.querySelector("input");
const keyNums = document.querySelectorAll(".numbs");
const pop = document.querySelector(".popping");
const clear = document.querySelector(".clear");
const evaluate = document.querySelector(".evaluate");


// Here is The main Logic For the functionalities

buttonOnOff.addEventListener("click", function(){ // Event of On and Off
    if(state == true){
        history.innerText = "";
        input.value = "";
    }else{
        history.innerText = "None";
        input.value = "";
    }
    state = !state;
}); 

for(var i=0;i<keyNums.length;i++){
    keyNums[i].addEventListener("click",function(){
        if(state == false) return;
        var ch = this.innerText;
        if(input.value == 0) input.value = "";
        if(ch == 'x') input.value = input.value + '*';
        else input.value = input.value + ch;
    });
}

pop.addEventListener("click", function(){
    if(state == false) return;
    var expression = input.value.substring(0,input.value.length-1);
    input.value = expression;
});

clear.addEventListener("click", function(){
    if(state == false) return;
    input.value = "";
});


evaluate.addEventListener("click", function(){
    if(state == false) return;
    var res = eval(input.value);
    history.innerText = input.value;
    input.value = res;
});

history.addEventListener("click",function(){
    if(state == false) return;
    input.value = history.innerText;
});
