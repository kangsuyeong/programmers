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
    
    const linearWeak = [...weak]
    
    for(let i=0;i<weak.length;i++){
        linearWeak.push(weak[i]+n)
    }
    
    // 친구 수 정하기
    for(let num=1;num<=dist.length;num++){
        
        // 순열 만들기
        const permutations = getPermutation(dist,num)
        
        // 순열 순회하기
        for(const perm of permutations){
            
            // 취약점 시작 지점 정하기
            for(let start=0;start<weak.length;start++){
                let friendUsed = 1
                let coverd = linearWeak[start] + perm[0] 
                // 취약점 순회하기
                for(let cur=start+1;cur<start+weak.length;cur++){
                    if(coverd < linearWeak[cur]){
                        friendUsed+=1
                        if(friendUsed>num) break
                        
                        coverd = linearWeak[cur] + perm[friendUsed-1]
                    }
                }
                
                if(num===friendUsed) return num
            }
        }
    }
    return -1
}