function solution(s) {
    const result = []
    
    for(const str of s){
        const stack = []
        let count = 0
        for(let i=0;i<str.length;i++){
            const n = stack.length
            if(n>=2 && stack[n-2]==='1' && stack[n-1]==='1' && str[i]==='0'){
                stack.pop()
                stack.pop()
                count+=1
                continue
            }
                
            stack.push(str[i])
        }
        
        const rest = stack.join('')
        const insertIndex = rest.lastIndexOf('0') +1
        const insertString = '110'.repeat(count)
        
        result.push(rest.slice(0,insertIndex) + insertString + rest.slice(insertIndex))
    }
    
    return result
}