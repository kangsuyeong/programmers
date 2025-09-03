function solution(number, k) {
    const n = number.length
    const stack = []
    
    for(let i=0;i<n;i++){
        const cur = number[i]
        while(k>0 && stack.length && cur > stack[stack.length-1]){
            stack.pop()
            k--
        }
        stack.push(cur)
    }
    
    if(k>0){
        stack.splice(stack.length-k,k)
    }
    return stack.join('')
}