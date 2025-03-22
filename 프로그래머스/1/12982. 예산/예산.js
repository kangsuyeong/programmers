function solution(d, budget) {
    const n = d.length
    // 정렬하기
    d.sort((a,b)=>a-b)
    
    let result=0
    let spentMoney=0
    
    for(const money of d){
        const new_money = money+spentMoney
        if(new_money>budget) break;
        
        result+=1
        spentMoney=new_money
    }
    return result
}