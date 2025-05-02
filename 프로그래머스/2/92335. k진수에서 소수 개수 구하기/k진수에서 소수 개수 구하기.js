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
    let result = 0 // 소수 갯수
    const num_arr = n.toString(k).split('0')
    // console.log(num_arr)
    
    for(const num of num_arr){
        if(num==='') continue
        
        if(isPrime(Number(num))){
            result+=1
        }
    }
    return result
}