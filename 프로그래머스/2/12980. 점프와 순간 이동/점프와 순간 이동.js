function solution(n){
    let result=0
    while(n>0){
        // n이 짝수일때
        if(n%2===0){
            n/=2
        }
        // n이 홀수일때
        else{
            n-=1
            result+=1
        }
    }
    return result
}