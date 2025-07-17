function solution(n, info) {
    let result = Array(11).fill(0)
    
    let maxDiff = 0
    
    
    function dfs(arrow,index,scoreArray){
        if(index===11 || arrow===n){
            if(arrow<n){
                scoreArray[10] = n-arrow
            }
             // 점수 계산
            let ryanScore=0
            let appeachScore=0
            
            for(let i=0;i<10;i++){
                if(info[i]===0 && scoreArray[i]===0) continue
                
                // 라이언이 이길때
                if(info[i]<scoreArray[i]){
                    ryanScore+=10-i
                }
                else{
                    appeachScore+=10-i
                }
            }
            
            // 조기종료
            if(ryanScore<=appeachScore) return
            
            const diff = ryanScore-appeachScore
            if(maxDiff<diff){
                maxDiff=diff
                result=[...scoreArray]
            }
            
            if(maxDiff===diff){
                for(let i=10;i>=0;i--){
                    if(result[i]<scoreArray[i]){
                        result=[...scoreArray]
                        break;
                    }
                    else if (scoreArray[i] < result[i]) {
                        break;
                    }
                }
            }
            return
        }
        
        
        // 라이언이 이기는 경우
        if(info[index]<n-arrow){
            scoreArray[index] = info[index]+1
            dfs(arrow+info[index]+1,index+1,[...scoreArray])
            scoreArray[index] = 0 // 초기화
        }
        // 라이언이 지는 경우
        dfs(arrow,index+1,[...scoreArray])
    }
    
    dfs(0,0,Array(11).fill(0))
    if(maxDiff===0) return [-1]
    return result
}