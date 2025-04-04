function solution(d, budget) {
    let count = 0 // 지원할 수 있는 부서
    let current_money = 0 // 현재 사용한 금액
    
    // 정렬
    d.sort((a,b)=>a-b)
    
    for(const money of d){
        current_money += money
        
        if(current_money>budget) break
        count+=1
    }
    return count
}