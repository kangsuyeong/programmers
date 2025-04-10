function solution(today, terms, privacies) {
    
    const result=[]
    
    const terms_obj={} // 약관을 객체로 저장
    
    // 약관 계산
    for(const t of terms){
        const [term,period] = t.split(' ')
        terms_obj[term] = Number(period)
    }
    
    for(let i=0;i<privacies.length;i++){
        const[start,term] = privacies[i].split(' ') // 개인정보 수집일자, 약관종류
        const [y,m,d] = today.split('.')
        const today_date = new Date(y,m-1,d) // 오늘날짜
        
        const [sy,sm,sd] = start.split('.')
        const newM = sm-1+terms_obj[term]
        
        const ey = Number(sy) + Math.floor(newM/12)
        const em = newM%12
        const expire_date = new Date(ey,em,sd) // 개인정보 수집 일자
        
        // 개인정보 수집 일자에 유효기간 더하기
        if(today_date>=expire_date){
            result.push(i+1)
        }
        
    }
    return result
}