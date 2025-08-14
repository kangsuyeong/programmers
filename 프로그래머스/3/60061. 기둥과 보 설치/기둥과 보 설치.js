function solution(n, build_frame) {
    const s = new Set()
    
    // 기둥 유무
    const hasP = (x,y)=> s.has(`${x},${y},0`)
    
    // 보 유무
    const hasB = (x,y)=> s.has(`${x},${y},1`)
    
    // 기둥 설치 가능
    const canP = (x,y)=> y===0 || hasB(x,y) || hasB(x-1,y) || hasP(x,y-1)
    
    // 보 설치 가능
    const canB = (x,y)=> hasP(x,y-1) || hasP(x+1,y-1) || (hasB(x-1,y) && hasB(x+1,y))
    
    function isValid(){
        const array = [...s].map(v=>v.split(',').map(Number))
        for(const [x,y,a] of array){
            // 기둥일때
            if(a===0 && !canP(x,y)) return false
            if(a===1 && !canB(x,y)) return false
        }
        return true
    }
    
    
    for(const [x, y, a, b] of build_frame){
        const key = `${x},${y},${a}`
        // 설치 일 경우
        if(b===1){
            s.add(key)
            if(!isValid()) s.delete(key)
        }
        else{
            s.delete(key)
            if(!isValid()) s.add(key)
        }
    }
    return [...s].map(v=>v.split(',').map(Number)).sort((a,b)=>a[0]-b[0]||a[1]-b[1]||a[2]-b[2])
}