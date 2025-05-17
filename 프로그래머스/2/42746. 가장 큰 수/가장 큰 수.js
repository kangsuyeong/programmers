function solution(numbers) {
    let result = numbers.sort((a,b)=>{
        if(String(a)+String(b)>String(b)+String(a)) return -1
        else return 1
    }).join('')
    
    
    if(result[0]==='0') return '0'
    
    return result 
}