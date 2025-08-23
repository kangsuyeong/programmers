function getPermutation(arr,n){
    const result = []
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutaion = getPermutation(rest,n-1)
        const combined = restPermutaion.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function solution(n, weak, dist) {
    const linearWeak = [...weak]
    for(let i=0;i<weak.length;i++){
        linearWeak.push(weak[i]+n)
    }

    // 친구 인원수 정하기
    for(let num=1;num<=dist.length;num++){
        
        const permutaions = getPermutation(dist,num)
        
        // 친구 순열 정하기
        for(const perm of permutaions){
            
            // 취약점 시작점 정하기
            for(let start=0;start<weak.length;start++){
                let friendUsed = 1
                let covered = weak[start]+perm[0]
                // 취약점 탐색하기
                for(let next=start+1;next<start+weak.length;next++){
                    if(linearWeak[next]>covered){
                        friendUsed++
                        if(friendUsed>num) break;
                        covered=linearWeak[next]+perm[friendUsed-1]
                    }
                }
                
                if(friendUsed===num) return num
            }
        }
    }
    return -1
}