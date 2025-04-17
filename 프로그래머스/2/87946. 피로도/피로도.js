function getPermutations(arr,n){
    const result = []
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)] // fixed뺀 나머지 배열
        const perms = getPermutations(rest,n-1)
        const attached = perms.map((perm)=>[fixed,...perm])
        result.push(...attached)
    })
    return result
}

function solution(k, dungeons) {
    let total_count = 0 // 최대 던전수
    const allOrders = getPermutations(dungeons, dungeons.length);
    
    for(const orders of allOrders){
        let current_fatigue=k
        let count = 0 // 탐험한 던전수
        for(const [need_fatigue,use_fatigue] of orders){
            if(current_fatigue>=need_fatigue){
                count+=1
                current_fatigue-=use_fatigue
            }
        }
        
        total_count = Math.max(total_count,count)
    }
    return total_count
}