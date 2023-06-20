const containerEl = document.querySelector(".container");

for (let index = 0; index < 12; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
}

const randomColorCode = () =>{
    const alpha = "0123456789abcdef";
    let ColorCode = "";
    const le = 6;
    for (let i = 0; i < le; i++) {
        const randomChar = Math.floor(Math.random()*alpha.length);
        ColorCode += alpha[randomChar]
        
    }
    return ColorCode;
}


const colorContainersEls = document.querySelectorAll(".color-container")
console.log(colorContainersEls);

const generateColors = () =>{
    colorContainersEls.forEach((color)=>{
        const newColorCode = randomColorCode()
        color.style.backgroundColor = "#"+newColorCode;
        color.innerText = "#"+newColorCode;
        
    })
}

generateColors()






