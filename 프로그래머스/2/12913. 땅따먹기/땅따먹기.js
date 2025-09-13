function solution(land) {
    const n = land.length
    
    for(let i=1;i<n;i++){
        for(let j=0;j<4;j++){
            if(j===0){
                land[i][0] = Math.max(land[i-1][1],land[i-1][2],land[i-1][3]) + land[i][0]
            }
            else if(j===1){
                land[i][1] = Math.max(land[i-1][0],land[i-1][2],land[i-1][3]) + land[i][1]
            }
            else if(j===2){
                land[i][2] = Math.max(land[i-1][0],land[i-1][1],land[i-1][3]) + land[i][2]
            }
            else{
                land[i][3] = Math.max(land[i-1][0],land[i-1][1],land[i-1][2]) + land[i][3]
            }
        }
    }
    return Math.max(...land[n-1])
}