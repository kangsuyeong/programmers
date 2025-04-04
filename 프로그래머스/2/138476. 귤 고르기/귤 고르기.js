function solution(k, tangerine) {
    
    let result = 0 // 귤의 종류
    let countSum = 0 // 현재 귤의 개수
    
    // 귤의 크기별 count
    const count = {}
    
    for(const t of tangerine){
        count[t] = (count[t]||0) + 1
    }
    
    // 빈도수에 따라서 내림차순으로 정렬
    const count_arr = Object.values(count).sort((a,b)=>b-a)
    
    for(const count of count_arr){
        countSum+=count
        result+=1
        if(countSum>=k) break
    }
    return result
    
}