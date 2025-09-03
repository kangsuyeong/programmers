function solution(numbers) {
    const n = numbers.length
    const stack = []
    
    const result = Array(n).fill(-1)
    
    for(let i=0;i<n;i++){
        const cur = numbers[i]
        
        while(stack.length && cur> numbers[stack[stack.length-1]]){
            const j= stack.pop()
            result[j] = cur
        }
        stack.push(i)
    }
    return result
}