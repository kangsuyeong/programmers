function solution(enroll, referral, seller, amount) {
    // 총인원수
    const n = enroll.length
    
    // 거래량
    const m = amount.length
    const referral_map = {}
    const total_map = {}
    
    for(let i=0;i<n;i++){
        referral_map[enroll[i]] = referral[i]
        total_map[enroll[i]] = 0
    }
    
    for(let i=0;i<m;i++){
        let 판매금액 = amount[i] * 100
        let 판매자 = seller[i]
        
        while(판매자 !== '-'){
            if(판매금액 < 10){
                total_map[판매자] += 판매금액
                break
            }
            
            const 전달금액 = Math.floor(판매금액*0.1)
            total_map[판매자] += 판매금액 - 전달금액
            
            판매금액 = 전달금액
            판매자 = referral_map[판매자]
        }
    }
    return enroll.map(v=>total_map[v])
}