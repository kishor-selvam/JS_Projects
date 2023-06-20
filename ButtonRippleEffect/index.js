const Button = document.querySelector(".buttons");

Button.addEventListener("mouseover",(e)=>{
    const x = (e.pageX - Button.offsetLeft);
    const y = (e.pageY - Button.offsetTop);

    Button.style.setProperty("--xPos",x +"px")
    Button.style.setProperty("--yPos",y +"px")
})