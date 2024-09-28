function add(a,b){
    return a + b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}



function operate(p,q,r){
     p = parseInt(p)
     q = parseInt(q)
    if(r === '+'){
        return add(p,q);
    }
    else if(r === '-'){
       return  subtract(p,q);
    }
    else if(r === '*'){
       return  multiply(p,q);
    }
    else{
        if(q != 0){
        return divide(p,q);
        }
        else{
            alert('Wow, did you skip math class? Because that’s just embarrassing!')
        }
    }
}


let v = 0
document.querySelector("#inputbox").value = v

function display(e){
    let b = document.querySelectorAll(".but")
    let inp = document.querySelector("#inputbox")
    if (inp.value === '0' && !isNaN(e.value)) {
        inp.value = '';
    }
    inp.value += e.value
   
    console.log(e.value)

    if(e.value === '='){
        let input = inp.value.slice(0,-1)
        let [p,q,r] = splitInput(input)
        let result = operate(p,q,r)
        console.log(result)
        inp.value = result
    }

}

function splitInput(input){
    let operator
    if(input.includes('+')){
        operator = '+'
    }
    else if(input.includes('-')){
        operator = '-'
    }
    else if(input.includes('*')){
        operator = '*'
    }
    else{
        operator = '/'
    }

    let splitInput = input.split(operator)

    num1 = splitInput[0]
    num2 = splitInput[1]

    console.log(num1,num2)
    return [num1,num2,operator]
    
}

function Clear(e){
    let input = document.querySelector("#inputbox")
    let clear = 0
    clear = parseInt(clear)
    input.value = clear
}




