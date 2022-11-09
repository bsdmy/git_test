function operate(operator, a , b){
    switch (operator){
        case '+':
            return Number(a) + Number(b);
        case '-':
            return Number(a) - Number(b);
        case '*':
            return Number(a) * Number(b);
        case '/':
            return Number(a) / Number(b);
    }
}
function func(e){
    display+= e.target.textContent;
    console.log(display)
}
console.log(operate("-","-1",2))

let display = ""
const container = document.querySelector('.container');
console.dir(container.firstElementChild);
const div = document.querySelector("div.screen")

const buttons = Array.from(document.querySelectorAll('button'))
console.log(buttons)
buttons.forEach(button => button.addEventListener('click',func))
let before = false
let next = false
function func(e){
    console.log(next)
    console.log(before)
    if(e.target.textContent!= "cl" && e.target.textContent != "+" && e.target.textContent != "-"
    && e.target.textContent != "*"&& e.target.textContent != "/"&& e.target.textContent != "="&& e.target.textContent != "X"){
        display += e.target.textContent
        console.log(1)
    }
    else if(e.target.textContent == "="){
        display = `${operate(display)}`
        before = false
        next = false
        console.log(1)
    }
    else if(e.target.textContent == "cl"){
        display = ""
        before = false
        next = false
        console.log(1)
    }
    else if(next){
        next = true
        console.log(1)
    }
    else if(before){
        display = `${operate(display)}${e.target.textContent}`
        next = true
        console.log(1)
    }
    else{
        display = `${display}${e.target.textContent}`
        before = true
        next = true
        console.log(1)
    }
    div.textContent = display  
}