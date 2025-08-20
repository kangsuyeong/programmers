function getPermutaions(arr,n){
    const result = []
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutaions = getPermutaions(rest,n-1)
        const combined = restPermutaions.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function solution(n, weak, dist) {
    const weakLength = weak.length
    
    const linearWeak = [...weak]
    
    for(let i=0;i<weakLength;i++){
        linearWeak.push(weak[i] + n)
    }
    
    let result = dist.length+1
    
    // 최소 인원 찾기
    for(let i=1;i<=dist.length;i++){
        const permutaions = getPermutaions(dist,i)
        
        for(const perm of permutaions){
            
            // 취약점 어디부터 확인할것인가?
            for(let start = 0;start<weakLength;start++){
                const segment = linearWeak.slice(start,start+weakLength)
                let count = 1 // 친구수
                let cover = segment[0] + perm[0]
                
                // 취약 지역 확인하며 커버 여부 확인
                for(let j=0;j<segment.length;j++){
                    if(segment[j]>cover){
                        count++
                        if(count>i) break;
                        cover = segment[j] + perm[count-1]
                    }
                    
                    if(j===segment.length-1){
                        result=Math.min(result,count)
                    }
                }
            }
        }
    }
    return result > dist.length ? -1 : result
}