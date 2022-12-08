
const prevOp = document.querySelector("#prev-op");
const currentOp = document.querySelector("#current-op");
const buttons = document.querySelectorAll("#btn-op button");

class Calculadora {
    
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value ==="."){
            console.log("num "+value)
        }
        else{
            console.log("op "+value)
        }
    });
});
