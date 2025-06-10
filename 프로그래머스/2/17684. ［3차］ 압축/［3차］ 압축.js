function solution(msg) {
    const result = []
    const letterMap = new Map()
    
    for(let i=0;i<26;i++){
        letterMap.set(String.fromCharCode(65+i),i+1)
    }
    
    let w = ''
    for(let i=0;i<msg.length;i++){
        const c = msg[i]
        const wc = w+c
        if(letterMap.has(wc)){
            w=wc
        }
        else{
            result.push(letterMap.get(w))
            letterMap.set(wc,letterMap.size+1)
            w=c
        }
        
        
    }
    
    if(w) result.push(letterMap.get(w))
    
    return result
}