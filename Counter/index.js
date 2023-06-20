const counter = document.querySelector('#result');
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
var count = 0;

const myFun = () =>{
    console.log(count);
    plus.addEventListener("click", () =>{
        count+=1;
    console.log(count);
    
        counter.innerHTML = count;
    })
    minus.addEventListener("click", () =>{
        count-=1;
        counter.innerHTML = count;
    })
}

myFun();