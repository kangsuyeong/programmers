function solution(prices) {
    const n = prices.length 
    let stack =[0]
    let result=[]
    for(let i=1;i<n;i++){
        while(stack.length>0 && prices[i]<prices[stack[stack.length-1]]){
            const top = stack.pop()
            result[top] = i-top
        }
        stack.push(i)
    }
    while(stack.length>0){
        const top = stack.pop()
        result[top] = n-1-top
    }
    return result
}