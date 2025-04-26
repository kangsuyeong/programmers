function solution(numbers) {
    numbers.sort((a,b)=>{
        // 음수일때 자리를 안바꾼다.
        if(String(a)+String(b) >String(b)+String(a)){
            return -1
        }
        return 1
    })
    return numbers.join('')[0] ==='0' ? '0' : numbers.join('')
}