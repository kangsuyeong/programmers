function solution(n,a,b)
{
    let result = 0 // 라운드 수
    
    while(a!==b){
        result+=1
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
    }
    return result
}