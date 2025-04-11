function solution(today, terms, privacies) {
    const n = privacies.length
    const result =[]
    
    // map 형태로 저장
    const terms_map={}
    for(const t of terms){
        const [term,period] = t.split(' ')
        terms_map[term] = Number(period)
    }
    
    for(let i=0;i<n;i++){
        const [privacy,term] = privacies[i].split(' ')
        const [ty,tm,td] = today.split('.')
        const today_date = new Date(ty,tm-1,td)
        
        const [ey,em,ed] = privacy.split('.')
        const expire_date = new Date(ey,Number(em)+terms_map[term]-1,ed)
        
        if(today_date>=expire_date){
            result.push(i+1)
        }
    }
    return result
}