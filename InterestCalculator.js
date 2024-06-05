let display = document.querySelector('#display')
let input1 = document.querySelector('#amount')
let input2 = document.querySelector('#interestVal')
let button = document.querySelector('button')


button.addEventListener('click', ()=>{
    interest(input1.value, input2.value)
})
function interest(val1, val2) {
    if (val2.includes('%')) {
        // console.log('checking:'+val2.legnth)
        let interestValue = val2.substring(0,(val2.length-1))
        console.log(interestValue)
        answer =  (val1 * interestValue)/100
   console.log(answer)
   display.innerText ='Interest value: ' +answer
    }else{
         let interestValue = val2
         answer =  (val1 * interestValue)/100
   console.log(answer)
   display.innerText = 'Interest value: ' +answer
    }
    
}


