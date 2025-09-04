function solution(name) {
    const n = name.length
    let vertical = 0
    
    for(let i=0;i<n;i++){
        const diff = name.charCodeAt(i) - 65
        vertical += Math.min(diff,26-diff)
    }
    
    let horizontal = n-1
    for(let i=0;i<n;i++){
        let next = i+1
        if(name[next]!=='A') continue
        while(next<n && name[next]==='A') next++
        
        horizontal=Math.min(
            horizontal,
            i*2+(n-next),
            (n-next)*2 + i
        )
    }
    return vertical+ horizontal
}