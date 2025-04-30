function isPrime(n){
    if(n===1) return false
    if(n===2) return true
    if(n%2===0) return false
    for(let i=3;i<=Math.sqrt(n);i++){
        if(n%i===0) return false
    }
    return true
}

function solution(n, k) {
    let result = 0 // 소수의 개수
    
    const num_arr = n.toString(k).split('0')
    
    for(const num of num_arr){
        if(num==='') continue // 빈문자열일 경우 패스
        
        if(isPrime(Number(num))){
            result+=1
        }
        
    }
    return result
}