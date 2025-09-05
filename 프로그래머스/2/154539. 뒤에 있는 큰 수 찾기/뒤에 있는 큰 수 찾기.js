function solution(numbers) {
    const result = Array(numbers.length).fill(-1)
    const stack = []
    
    for(let i=0;i<numbers.length;i++){
        const cur = numbers[i]
        
        while(stack.length && numbers[stack[stack.length-1]] < cur){
            const j = stack.pop()
            result[j] = cur
        }
        
        stack.push(i)
    }
    return result
}