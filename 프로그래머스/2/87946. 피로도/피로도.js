function getPermutation(arr,n){
    const result = []
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,index,origin)=>{
        const rest = [...origin.slice(0,index),...origin.slice(index+1)]
        const restPermutation = getPermutation(rest,n-1)
        const combined = restPermutation.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

function solution(k, dungeons) {
    let total = 0
    const perms = getPermutation(dungeons,dungeons.length)
    for(const perm of perms){
        let cur = k
        let count = 0
        for(const [need,use] of perm){
            if(cur>=need){
                count+=1
                cur-=use
            }
        }
        total = Math.max(total,count)
    }
    return total
}