function solution(numbers) {
    const n = numbers.length
    const result = Array(n).fill(-1)
    
    const stack = []
    
    for(let i=0;i<n;i++){
        const current = numbers[i]
        
        while(stack.length && numbers[stack[stack.length-1]] < current){
            const j = stack.pop()
            result[j] = current
        }
        stack.push(i)
    }
    return result
}