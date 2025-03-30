function solution(d, budget) {
    // 정렬하기
    d.sort((a,b)=>a-b)
    let current_money = 0 // 현재 사용한 금액
    let result=0
    
    for(const money of d){
        current_money+=money // 현재 사용한 금액 업데이트
        if(current_money>budget) break
        result++
    }
    
    return result
}