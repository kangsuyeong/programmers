function solution(numbers) {
    const n = numbers.length
    const result = Array(n).fill(-1)
    const stack = []
    
    // 숫자가 아니라 인덱스를 담는다.
    for(let i=0;i<n;i++){
        // 현재 숫자
        const cur = numbers[i]
        
        while(stack.length && numbers[stack[stack.length-1]]<cur){
            const j = stack.pop()
            result[j] = cur
        }
        
        stack.push(i)
    }
    return result
}