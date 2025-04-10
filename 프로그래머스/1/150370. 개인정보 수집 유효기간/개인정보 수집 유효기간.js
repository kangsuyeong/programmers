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
        const today_date = new Date(today) // 오늘날짜
        const start_date = new Date(start) // 개인정보 수집 일자

        // 개인정보 수집 일자에 유효기간 더하기
        start_date.setMonth(start_date.getMonth() + terms_obj[term])
        if(today_date>=start_date){
            result.push(i+1)
        }
        
    }
    return result
}