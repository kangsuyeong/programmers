function solution(n, build_frame) {
    const result = new Set()
    
    // 기둥 가지고 있는지
    function hasP(x,y){
        return result.has(`${x},${y},0`)
    }
    
    // 기둥을 설치할 수 있는지
    function canP(x,y){
        return y===0 || hasB(x,y) || hasB(x-1,y) || hasP(x,y-1)
    }
    
    // 보를 설치할 수 있는지
    function canB(x,y){
        return hasP(x,y-1) || hasP(x+1,y-1) || (hasB(x-1,y) && hasB(x+1,y))
    }
    
    // 보를 가지고 있는지
    function hasB(x,y){
        return result.has(`${x},${y},1`)
    }
    
    
    function isValid(){
        for(const item of result){
            const [x,y,a] = item.split(',').map(Number)
            if(a===0 && !canP(x,y)) return false
            if(a===1 && !canB(x,y)) return false
        }
        return true
    }
    
    for(const [x,y,a,b] of build_frame){
        const key = `${x},${y},${a}`
        
        // 설치일 경우
        if(b===1){
            result.add(key)
            // 작업 불가능하면 롤백
            if(!isValid()) result.delete(key)
        }
        else{
            result.delete(key)
            // 작업 불가능하면 롤백
            if(!isValid()) result.add(key)
        }
    }
    return [...result].map(v=>v.split(',').map(Number)).sort((a,b)=>a[0]-b[0] || a[1]-b[1] || a[2]-b[2])
}