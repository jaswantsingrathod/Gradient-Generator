const colorOne = document.getElementById("color-a");
const colorTwo = document.getElementById("color-b");
let currentDirection ='to bottom'
let outputCode = document.getElementById("code");

function setDirection(value,_this){
let direction = document.querySelectorAll(".buttons button");
for(let i of direction){
    i.classList.remove("active");
}
 
_this.classList.add("active");
currentDirection = value;
}

function generateCode(){
    outputCode.value = `background: linear-gradient = (${currentDirection},${colorOne.value},${colorTwo.value});`

    document.getElementsByTagName("BODY")[0].style.background = `linear-gradient(${currentDirection},${colorOne.value},${colorTwo.value})`;
}

function copyText(){
navigator.clipboard.writeText(outputCode.value)
.then(()=>{
    alert('Gradient Copied');
}

)
}

generateCode();