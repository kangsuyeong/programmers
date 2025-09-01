function getPermutation(arr,n){
    const result = []
    
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutation = getPermutation(rest,n-1)
        const combined = restPermutation.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function solution(n, weak, dist) {
    
    // 원형 -> 직선
    const linearWeak = [...weak]
    
    for(let i=0;i<weak.length;i++){
        linearWeak.push(weak[i]+n)
    }
    
    // 친구 인원수 정하기
    for(let num=1;num<=dist.length;num++){
        
        // 순열 만들기
        const permutations = getPermutation(dist,num)
        
        // 친구 조합 순회하기
        for(const perm of permutations){
            
            // 첫번째 외벽 조사 지점 정하기
            for(let start=0;start<weak.length;start++){
                let friendUsed = 1 // 사용한 친구
                
                // 현재 친구로 점검 가능한 구간 -> 시작점부터 첫번째친구가 점검 가능한 구간
                let coverd = linearWeak[start] + perm[0]
                
                // 두번째 ~ 마지막 까지 외벽 조사하기
                for(let cur=start+1;cur<start+weak.length;cur++){
                    // 현재 친구로 점검 가능한 구간을 넘는 경우
                    if(linearWeak[cur] > coverd){
                        friendUsed+=1 // 친구 한명더 늘려주기
                        
                        if(friendUsed>num) break// 처음 지정한 친구 수 보다 사용한 친구수가 많으면 종료
                        
                        
                        // 현재 친구로 점검 가능한 구간 업데이트 
                        coverd = linearWeak[cur] + perm[friendUsed-1]
                    }
                }
                
                // 처음에 정한 친구 인원수와 사용한 친구수가 같으면 최소 친구의 값
                if(friendUsed===num) return num
            }
        }
    }
    return -1
}