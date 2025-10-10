function solution(enroll, referral, seller, amount) {
    
    const n = enroll.length
    
    const referral_map = {}
    const total_map = {}
    
    for(let i=0;i<n;i++){
        referral_map[enroll[i]] = referral[i]
        total_map[enroll[i]] = 0
    }
    
    for(let i=0;i<amount.length;i++){
        let 이익 = amount[i]*100
        let 사람 = seller[i]
        while(사람!=='-'){
            if(이익<10){
                total_map[사람]+=이익
                break;
            }
            
            const 추천인지급이익 = Math.floor(이익*0.1)
            total_map[사람] += 이익-추천인지급이익
            이익 = 추천인지급이익
            사람 = referral_map[사람]
        }
    }
    return enroll.map(v=>total_map[v])
}