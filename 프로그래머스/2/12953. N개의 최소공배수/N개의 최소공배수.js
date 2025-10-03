function gcd(a,b){
    if(b===0) return a
    
    return gcd(b,a%b)
}

function lcm(a,b){
    return a*b/gcd(a,b)
}

function solution(arr) {
    let result = arr[0]
    
    for(let i=1;i<arr.length;i++){
        result = lcm(result,arr[i])
    }
    return result
}