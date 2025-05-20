function solution(lottos, win_nums) {
    
    const collect_count = lottos.filter(lotto=>win_nums.includes(lotto)).length
    const zero_count = lottos.filter(lotto=>lotto===0).length
    
    function rank(n){
        if(n>=2) return 7-n
        return 6
    }
    return [rank(collect_count+zero_count),rank(collect_count)]
}