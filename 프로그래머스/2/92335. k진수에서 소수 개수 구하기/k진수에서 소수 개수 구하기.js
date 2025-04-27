function isPrime(n){
    if(n<=1) return false
    if(n===2) return true
    if(n%2===0) return false
    
    for(let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i===0) return false
    }
    return true
}

function solution(n, k) {
    let count=0
    const num_arr = n.toString(k).split('0')
    for(const num of num_arr){
        if(isPrime(Number(num))){
            count+=1
        }
    }
    return count
}