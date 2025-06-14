function solution(msg) {
    const dict = new Map()
    
    for(let i=0;i<26;i++){
        dict.set(String.fromCharCode(65+i),i+1)
    }
    
    let w = '' // 현재 가장 긴 문자열
    const result = []
    
    for(let i=0;i<msg.length;i++){
        const c = msg[i] // 현재 문자열
        const wc = w+c
        
        if(dict.get(wc)){
            w = wc
        }
        else{
            result.push(dict.get(w))
            dict.set(wc,dict.size+1)
            w=c
        }
    }
    
    result.push(dict.get(w))
    
    return result
}