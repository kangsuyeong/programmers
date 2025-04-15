function solution(numbers) {
    numbers.sort((a,b)=>{
        if(String(a)+String(b) > String(b)+String(a)){
            return -1
        }
        return 1
    })
    const result = numbers.join('')
    return result[0] === '0' ? '0' : result
}