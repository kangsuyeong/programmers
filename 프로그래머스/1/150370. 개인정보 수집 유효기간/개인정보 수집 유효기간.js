function solution(today, terms, privacies) {
    const result=[]
    const n = privacies.length
    const count = {}
    for(const term of terms){
        const [key,value] = term.split(' ')
        count[key] = Number(value)
    }
    const today_date = new Date(today)
    
    for(let i=0;i<n;i++){
        const [privacy,key] = privacies[i].split(' ')
        const privacy_date = new Date(privacy)
        privacy_date.setMonth(privacy_date.getMonth() + count[key]);
        if(today_date>=privacy_date){
            result.push(i+1)
        }
    }
    return result
}