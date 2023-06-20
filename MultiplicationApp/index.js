const Score = document.getElementById("score");
const Question = document.getElementById("qsn");
const Input = document.getElementById("input");
const Button = document.getElementById("btn");
const FormElement = document.getElementById("form")

var n = Math.ceil(Math.random() * 10);
var m = Math.ceil(Math.random() * 10);
var Answer = n * m;
let Scores = JSON.parse(localStorage.getItem("Score"));
Question.innerText = `What is ${n} multiply by ${m}?`;

if(!Scores){
    Scores=0;
}
Score.innerText = `Score : ${Scores}`

FormElement.addEventListener("submit", (e) => {
     const userAns = +Input.value

    if (userAns === Answer) {
        Scores += 1;
        updateLocalStorage();
    }
    else {
        Scores -= 1;
        updateLocalStorage();
    }

})

function updateLocalStorage() {
    localStorage.setItem("Score", JSON.stringify(Scores));
}