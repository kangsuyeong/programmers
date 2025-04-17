function solution(s) {
    const result = []
    
    for(const str of s){
        const stack = [] // 스택
        let count = 0 // '110'나오는 횟수
        for(let i=0;i<str.length;i++){
            stack.push(str[i])
            // 스택에 110이 쌓였을때
            if(stack.length>=3 && stack[stack.length-3]==='1' && stack[stack.length-2]==='1' && stack[stack.length-1]==='0'){
                stack.splice(-3,3) // 스택에서 110삭제
                count++ // count 증가
            }
        }
        
        const rest = stack.join('') // 남아있는 문자열
        const insertIndex = rest.lastIndexOf('0') + 1 // 삽입해야하는 index -> 가장 마지막 0
        const insertString = '110'.repeat(count)
        result.push(rest.slice(0,insertIndex)+insertString+rest.slice(insertIndex))
    }
    return result
}
