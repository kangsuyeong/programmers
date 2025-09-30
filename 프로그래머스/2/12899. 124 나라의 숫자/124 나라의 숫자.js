function solution(n) {
    const result = []
    
    while(n>0){
        const r = n%3
        if(r===0){
            result.push(4)
            n = Math.floor(n/3) -1
        }
        else{
            result.push(r)
            n = Math.floor(n/3)
        }
    }
    return result.reverse().join('')
}