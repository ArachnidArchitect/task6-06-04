function interest(val1, val2) {
    if (val2.includes('%')) {
        // console.log('checking:'+val2.legnth)
        let interestValue = val2.substring(0,(val2.length-1))
        console.log(interestValue)
        answer =  (val1 * interestValue)/100
   console.log(answer)
    }else{
         let  = val2
         answer =  (val1 * interestValue)/100
   console.log(answer)
    }
    
}
interest(200,"2%")

