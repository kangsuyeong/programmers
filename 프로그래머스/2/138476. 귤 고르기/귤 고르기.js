function solution(k, tangerine) {
    let result =0 // 귤의 종류
    const count={} // 귤의 갯수를 세는 객체
    let countSum = 0 // 현재까지 귤의 갯수
    
    // 귤 갯수 세기
    for(const t of tangerine){
        count[t] = (count[t]||0) + 1
    }
    
    // value값만 뽑아서 정렬
    const count_arr = Object.values(count).sort((a,b)=>b-a)
    
    for(const count of count_arr){
        countSum+=count
        result+=1
        if(countSum>=k) break;
    }
    return result
    
    
}