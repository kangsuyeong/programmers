function solution(s) {
    const result = []
    
    for(const str of s){
        const stack = []
        let count = 0
        for(let i=0;i<str.length;i++){
            stack.push(str[i])
            if(stack.length>=3 && stack[stack.length-3]==='1' && stack[stack.length-2]==='1' && stack[stack.length-1]==='0'){
                stack.splice(-3,3)
                count++
            }
        }
        
        const rest = stack.join('')
        const insertIndex = rest.lastIndexOf('0') + 1
        const insertString = '110'.repeat(count)
        result.push(rest.slice(0,insertIndex)+insertString+rest.slice(insertIndex))
    }
    return result
}
