function solution(n, build_frame) {
    const results = new Set()
    
    // 기둥이 있는지
    function hasP(x,y){
        return results.has(`${x},${y},0`)
    }
    
    // 보가 있는지
    function hasB(x,y){
        return results.has(`${x},${y},1`)
    }
    
    // 기둥 설치 유뮤
    function canP(x,y){
        return y===0 || hasB(x,y) || hasB(x-1,y) || hasP(x,y-1)
    }
    
    // 보 설치 유무
    function canB(x,y){
        return hasP(x,y-1) || hasP(x+1,y-1) ||(hasB(x-1,y) && hasB(x+1,y))
    }
    
    function isValid(){
        for(const result of results){
            const [x,y,a] = result.split(',').map(Number)
            if(a===0 && !canP(x,y)) return false
            if(a===1 && !canB(x,y)) return false
        }
        return true
    }
    
    
    for(const [x,y,a,b] of build_frame){
        const key = `${x},${y},${a}`
        if(b===1){
            results.add(key)
            if(!isValid()) results.delete(key)
        }
        else{
            results.delete(key)
            if(!isValid()) results.add(key)
        }
    }
    return [...results].map(v=>v.split(',').map(Number)).sort((a,b)=>a[0]-b[0] || a[1]-b[1] || a[2]-b[2])
}