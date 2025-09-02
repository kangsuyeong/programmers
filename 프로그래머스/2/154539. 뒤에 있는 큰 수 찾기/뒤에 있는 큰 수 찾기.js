function solution(numbers) {
    const n = numbers.length
    const answer = Array(n).fill(-1)
    
    const stack = [] // 못찾은 인덱스를 담는다.
    
    for(let i=0;i<n;i++){
        const cur = numbers[i]
        
        while(stack.length>0 && cur>numbers[stack[stack.length-1]]){
            const j = stack.pop()
            answer[j] = cur
        }
        
        stack.push(i)
    }
    
    return answer
}