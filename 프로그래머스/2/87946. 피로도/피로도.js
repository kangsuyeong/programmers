function getPermutations(arr,n){
    const result = []
    if(n===1){
        return arr.map(v=>[v])
    }
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)] // fixed를 빼고 남은 값 → "나머지"
        const restPermutations = getPermutations(rest,n-1) // rest로 만든 (n-1)개짜리 순열 → "나머지 순열"
        const combined = restPermutations.map(p=>[fixed,...p]) //fixed를 앞에 붙인 결과 → "고정+나머지 순열"
        result.push(...combined)
    }) 
    return result
}



function solution(k, dungeons) {
    let total_count=0
    const allOrders = getPermutations(dungeons,dungeons.length)
    for(const order of allOrders){
        let current_fatigue = k
        let count = 0
        for(const [need_fatigue,use_fatigue] of order){
            if(current_fatigue<need_fatigue) break;
            
            count+=1
            current_fatigue-=use_fatigue
        }
        if(total_count<count){
            total_count=count
        }
    }
    return total_count
}