function solution(n, k) {
    let result=0
    
    function isPrime(n){ 
        if(n<=1) return false
        if(n===2) return true
        if(n%2===0) return false
        for(let i=3;i<=Math.sqrt(n);i+=2){
            if(n%i===0) return false
        }
        return true
    }
    
    const prime_arr = n.toString(k).split('0')
    for(const prime of prime_arr){
        if(isPrime(Number(prime))){
            result+=1
        }
    }
    return result
}