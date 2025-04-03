function solution(k, tangerine) {
    let result=0
    let countSum = 0
    const count = {}
    for(const t of tangerine){
        count[t] = (count[t]||0) + 1
    }
    
    const sort_arr = Object.values(count).sort((a,b)=>b-a)
    
    for(const s of sort_arr){
        countSum+=s
        result+=1
        if(countSum>=k) break
    }
    return result
}