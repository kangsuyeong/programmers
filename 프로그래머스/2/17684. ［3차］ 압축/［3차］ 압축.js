function solution(msg) {
    const dict = new Map()
    for(let i=0;i<26;i++){
        dict.set(String.fromCharCode(65+i),i+1)
    }
    
    const result = []
    
    let w = '' // 사전에서 현재 입력과 일치하는 가장 긴 문자열
    for(let i=0;i<msg.length;i++){
        const c = msg[i] // 다음 문자열
        const wc = w+c // 사전에서 현재 입력과 일치하는 가장 긴 문자열 + 다음 문자열
        
        // wc가 있는지 확인
        if(dict.has(wc)){
            w=wc
        }
        else{
            result.push(dict.get(w)) // w에 해당하는 index번호 push
            dict.set(wc,dict.size+1) // 사전 업데이트
            w=c
            
        }
    }
    
    // 마지막 w가 남아있으면
    if(w)  result.push(dict.get(w))
    
   return result
}