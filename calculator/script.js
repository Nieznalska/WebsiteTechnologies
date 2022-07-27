window.onload=function(){
    console.log("Działam ");
    calculator.init();
}

let calculator={
    buttons:undefined,
    input:undefined,

    init:function(){
        this.buttons=document.querySelectorAll(".numberButtons button, .operators button");
        this.input=document.getElementById("input");
        for(let i=0; i<this.buttons.length;i++ ){
            let el=this.buttons[i];
            el.addEventListener("click",this.buttonClick);
        }
    },
    buttonClick:function(e){
        let divHtmlText=e.target.innerHTML;
        switch(divHtmlText){
            case "=":
                calculator.evaluate();
            break;
            case "c":
                calculator.clear();
            break;
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4":
            case "3":
            case "2":
            case "1":
            case "0":
            case "00":
            case "+":    
            case "-":    
            case "/":    
            case "*":    
            calculator.addToInputFunction(divHtmlText);
            break;

        }
        
    },
    addToInputFunction:function(str){
        this.input.value+=str;
    },

    evaluate:function(){
        let result=math.evaluate(calculator.input.value); 
        calculator.setInput(result);  
    },
    clear:function(){
        calculator.setInput("");
    },
    setInput:function(str){
        calculator.input.value=str;
    }
};