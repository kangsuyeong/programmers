function solution(msg) {
    const dict = new Map()
    
    for(let i=0;i<26;i++){
        dict.set(String.fromCharCode(65+i),i+1)
    }
    
    let w = '' // 가장 긴 문자열
    const result = []
    for(let i=0;i<msg.length;i++){
        const c = msg[i] // 현재 문자열
        const wc = w+c
        
        if(dict.has(wc)){
            w=wc // 가장 긴 문자열 업데이트
        }
        else{
            result.push(dict.get(w)) // result에 푸시
            dict.set(wc,dict.size+1) // 사전 업데이트
            w=c // 가장 긴 문자열 업데이트
        }
    }
    
    result.push(dict.get(w))
    
    
    return result
}