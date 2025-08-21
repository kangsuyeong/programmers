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
        linearWeak.push(weak[i] + n)
    }
    
    let result = dist.length+1
    
    //  친구 수 구하기
    for(let num=1;num<=dist.length;num++){
        // 순열 만들기
        const permutations = getPermutation(dist,num)
        
        for(const perm of permutations){
            // 취약점 어디서 시작할지 정하기
            for(let start = 0;start<weak.length;start++){
                let freindUsed = 1
                let covered = linearWeak[start] + perm[0] // 어디까지 커버 가능한지
                // 탐색하기
                for(let i=start+1;i<start+weak.length;i++){
                    if(linearWeak[i]>covered){
                        freindUsed+=1
                        if(freindUsed>num) break;
                        covered = linearWeak[i] + perm[freindUsed-1]
                    }
                }
                
                if(freindUsed===num) return num
            }
        }
    }
    return -1
}