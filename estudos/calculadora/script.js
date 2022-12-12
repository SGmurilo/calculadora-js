
const prevOp = document.querySelector("#prev-op");
const currentOp = document.querySelector("#current-op");
const buttons = document.querySelectorAll("#btn-op button");

class Calculator {
    constructor(prevOp, currentOp){
        this.prevOp = prevOp;
        this.currentOp = currentOp;
        this.currentOperation = "";
    }

    // add digit to update calalculator screen
    addDigit(digit){
        if(digit === "." && currentOp.innerText.includes(".")){
            return;
        }
        this.currentOperation = digit;
        this.updateScreen();
    }


    processOperation(digit){
        
        let operationValue;

        let previous = +this.prevOp.innerText;
        let current = +this.currentOp.innerText;

        switch(operation){
            case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous )
            break;
            default:
                return;
        }
    }
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        this.currentOp.innerText += this.currentOperation;



    }




    
}

const calculator = new Calculator(prevOp,currentOp);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value ==="."){
            calculator.addDigit(value)
        }
        else{
            calculator.processOperation(value)
        }
    });
});
