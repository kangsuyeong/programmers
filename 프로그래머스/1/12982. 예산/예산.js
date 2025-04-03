function solution(d, budget) {
    let result = 0
    let current_money = 0
    d.sort((a,b)=>a-b)
    
    for(const money of d){
        current_money+=money
        if(current_money>budget) break;
        
        result+=1
    }
    return result
}