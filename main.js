let error_msg = "Inappropriate values".toUpperCase()
let display = document.querySelector(".display")
let digits = document.querySelectorAll('.number')
let dec = document.querySelector('.decimal')
let keys = document.querySelectorAll(".sp-key")
let operators = document.querySelectorAll(".operator")

let hasDecimal = false
let num1 = ''
let num2 = ''
let result = null
let operation = ''

function displayContent() {
    digits.forEach(digit => {
        digit.addEventListener('click', e => {
            num2 += e.target.textContent
            if (display.textContent.length > 20) {
                num2 = num2.slice(0, -1)
                display.textContent = num2
            }   
            
                display.textContent = num2
        
        })
    })

    operators.forEach(operator => {
        operator.addEventListener('click', e => {
            if (!num2) return;
            hasDecimal = false
            const currentOperation = e.target.textContent
            if (num1 && num2 && operation) {
                operate()
            }else {
                result = parseFloat(num2)
            }
            reset(currentOperation)
            operation = currentOperation
        })
    })

    keys.forEach(key => {
        key.addEventListener('click', e => {
            if(e.target.matches('button')) {
                let sp_key = e.target.dataset.op  
                if (sp_key === 'clear') {
                    num2 = ""
                    display.textContent = num2
                    result = ''
            }
                else if (sp_key === 'del'){
                    num2 = num2.slice(0, -1)
                    display.textContent = display.textContent.slice(0, -1)
                }
                else if(sp_key === 'decimal') {
                    if (e.target.textContent === '.' && !hasDecimal) {
                        hasDecimal = true
                        num2 += e.target.textContent
                        display.textContent = num2
                    }
                    else if (e.target.textContent === '.' && hasDecimal) {
                        return
                    }
                }
                else if (sp_key === 'equal') {
                    if (!num1 || !num2) return
                    hasDecimal = false;
                    operate()
                    reset()
                    display.textContent = result
                    num2 = result
                    num1 = ''
                }
            }
        })
    })

}


displayContent()
function reset(op='') {
    num1 += num2 + ' ' + op + ' ';
    display.textContent = num1
    display.textContent = ""
    display.textContent = result
    num2 = '' 
}  

function operate() {
    if (operation === 'x') {
        result = parseFloat(result) * parseFloat(num2);
        } else if (operation === '+') {
        result = parseFloat(result) + parseFloat(num2);
        } else if (operation === '-') {
        result = parseFloat(result) - parseFloat(num2);
        } else if (operation === '÷') {
        result = parseFloat(result) / parseFloat(num2);
}
}

