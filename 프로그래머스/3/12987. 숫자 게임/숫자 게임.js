function solution(A, B) {
    A.sort((a,b)=>a-b )
    B.sort((a,b)=>a-b)
    
    let score = 0
    let index = 0 
    for(let i=0;i<B.length;i++){
        if(B[i]>A[index]){
            score+=1
            index+=1
        }
    }
    return score
}