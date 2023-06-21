const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(e)=>{
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size+20+"px"
    spanEl.style.height = size+20+"px"
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
    const Span = document.createElement("h3");
    Span.style.left = xPos+10 + "px";
    Span.style.top = yPos+10 + "px";
    const Size1 = Math.random()*100;
    Span.style.width = Size1+20+"px"
    Span.style.height = Size1+20+"px"
    setTimeout(() => {
        Span.remove();
    }, 3000);
    bodyEl.appendChild(spanEl);
    bodyEl.appendChild(Span);
})