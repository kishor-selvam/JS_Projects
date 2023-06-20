const inputs = document.getElementById("textarea");
const total = document.getElementById("total");
const remain = document.getElementById('remain');
var t=50;
inputs.addEventListener("keyup",()=>{
    updateCounter();
    updateRemain();
})

const updateCounter = () =>{
    total.innerText = inputs.value.length;
}

const updateRemain = () =>{
    remain.innerText = t - inputs.value.length;
}