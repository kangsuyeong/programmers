function solution(enroll, referral, seller, amount) {
    // 총 사람의 수
    const n = enroll.length
    
    // 판매량
    const m = seller.length
    
    // 추천인을 저장할 map
    const referral_map = {}
    
    // 사람당 총 이익을 저장할 map
    const money_map = {}
    
    for(let i=0;i<n;i++){
        referral_map[enroll[i]] = referral[i]
        money_map[enroll[i]] = 0
    }
    
    for(let i=0;i<m;i++){
        let 이익 = amount[i]*100
        let 소득자 = seller[i]
        while(소득자!=='-'){
            if(이익<10){
                money_map[소득자]+=이익
                break
            }
            
            const 줘야하는돈 = Math.floor(이익*0.1)
            money_map[소득자]+=이익-줘야하는돈
            
            이익 = 줘야하는돈
            소득자 = referral_map[소득자]
        }
    }
    return enroll.map(v=>money_map[v])
}