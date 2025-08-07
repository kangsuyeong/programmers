function solution(number, k) {
    const stack = []
    
    for(const digit of number){
        while(k>0 && stack.length>0 && stack[stack.length-1] < digit){
            stack.pop()
            k--
        }
        stack.push(digit)
    }
    
    if(k>0){
        stack.splice(stack.length-k,k)
    }
    
    return stack.join('')
}