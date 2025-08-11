function solution(n, build_frame) {
    
    const s = new Set()
    
    // 기둥이 있는지 확인
    function hasP(x,y){
        return s.has(`${x},${y},0`)
    }
    
    // 보가 있는지 확인
    function hasB(x,y){
        return s.has(`${x},${y},1`)
    }
    
    // 기둥 설치가 가능한지
    function canP(x,y){
        return y===0 || hasB(x,y) || hasB(x-1,y) || hasP(x,y-1)
    }
    
    // 보 설치가 가능한지
    function canB(x,y){
        return hasP(x,y-1) || hasP(x+1,y-1) || (hasB(x-1,y) && hasB(x+1,y))
    }
    
    function isValid(){
        for(const item of s){
            const [x,y,a] = item.split(',').map(Number)
            if(a===0 && !canP(x,y)) return false
            if(a===1 && !canB(x,y)) return false
        }
        return true
    }
    
    for(const [x, y, a, b] of build_frame){
        const key = `${x},${y},${a}`
        // 설치 경우
        if(b===1){
            s.add(key)
            if(!isValid()) s.delete(key)
        }
        else{
            s.delete(key)
            if(!isValid()) s.add(key)
        }
    }
    return [...s].map(v=>v.split(',').map(Number)).sort((a,b)=>a[0]-b[0]||a[1]-b[1] || a[2]-b[2])
}