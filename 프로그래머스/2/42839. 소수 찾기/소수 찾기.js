function getPermutation(arr,n){
    if(n===1) return arr.map(v=>[v])
    
    const result = []
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutaion = getPermutation(rest,n-1)
        const combined = restPermutaion.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function isPrime(n){
    if(n<=1) return false
    if(n===2) return true
    if(n%2===0) return false
    for(let i=3;i<n;i+=2){
        if(n%i===0) return false
    }
    return true
}

function solution(numbers) {
    
    const allNumber = new Set()
    let result = 0
    
    for(let i=1;i<=numbers.length;i++){
        const permutation = getPermutation(numbers.split(''),i)
        for(const perm of permutation){
            allNumber.add(Number(perm.join('')))
        }
    }
    for(const num of allNumber){
        if(isPrime(num)) result++
    }
    return result
}