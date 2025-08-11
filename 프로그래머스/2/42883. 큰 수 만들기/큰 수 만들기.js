function solution(number, k) {
    const stack=[]
    let index = 0
    
    for(const digits of number){
        while(k>0 && stack.length>0 && stack[stack.length-1] <digits){
            stack.pop()
            k--
        }
        stack.push(digits)
    }
    
    if(k>0){
        stack.splice(stack.length-k,k)
    }
    
    return stack.join('')
}