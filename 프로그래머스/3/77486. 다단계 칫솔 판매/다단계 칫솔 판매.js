function solution(enroll, referral, seller, amount) {
    // 조직원 수
    const n = enroll.length
    
    // 거래 수
    const m  = amount.length
    
    const referral_map = {}
    const money_map = {}
    
    for(let i=0;i<n;i++){
        referral_map[enroll[i]] = referral[i]
        money_map[enroll[i]] = 0
    }
    
    for(let i=0;i<m;i++){
        let 판매금 = amount[i]*100
        let 수혜자 = seller[i]
        
        while(수혜자 !=='-'){
            if(판매금 < 10){
                money_map[수혜자]+=판매금
                break
            }
            
            const 추천인금액 = Math.floor(판매금 * 0.1)
            money_map[수혜자]+=판매금 - 추천인금액
            판매금 = 추천인금액
            수혜자 = referral_map[수혜자]
            
        }
    }
    return enroll.map(v=>money_map[v])
}