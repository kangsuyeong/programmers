function solution(enroll, referral, seller, amount) {
    
    // 전체 사람의 수
    const n = enroll.length
    
    
    // 추천인 정보를 저장하는 객체
    const referral_map = {}
    
    // 돈을 저장하는 객체
    const money_map = {}
    
    for(let i=0;i<n;i++){
        referral_map[enroll[i]] = referral[i]
        money_map[enroll[i]] = 0
    }
   
    for(let i=0;i<seller.length;i++){
        let 순이익 = amount[i]*100
        let 판매원 = seller[i]
        while(판매원!=='-'){
            if(순이익<10){
                money_map[판매원]+=순이익
                break;
            }
            
            let 바칠돈 = Math.floor(순이익*0.1)
            money_map[판매원]+=순이익-바칠돈
            
            // 순이익 업데이트
            순이익 =바칠돈
            
            판매원 = referral_map[판매원]
        }

    }
    return enroll.map((e)=>money_map[e])
}