function getPermutation(arr,n){
    if(n===1) return arr.map(v=>[v])
    const result = []
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutation = getPermutation(rest,n-1)
        const combined = restPermutation.map(p=>[fixed,...p])
        result.push(...combined)
    })
    
    return result
}

function solution(n, weak, dist) {
    
    const linearWeak = [...weak]
    for(let i=0;i<weak.length;i++){
        linearWeak.push(n+weak[i])
    }
    
    // 친구 수 정하기
    for(let num = 1;num<=n;num++){
        
        // 순열 만들기
        const permutation = getPermutation(dist,num)
        
        for(const perm of permutation){
            
            // 시작 지점 정하기
            for(let start=0;start<weak.length;start++){
                let friendUsed = 1
                let covered = weak[start] + perm[0]
                // 순회하면서 탐색하기
                for(let cur=start+1;cur<start+weak.length;cur++){
                    if(linearWeak[cur]>covered){
                        friendUsed+=1
                        if(friendUsed>num) break
                        
                        covered = linearWeak[cur]+perm[friendUsed-1]
                    }
                }
                
                if(friendUsed===num)return num
            }
        }
    }
    
    return -1
}