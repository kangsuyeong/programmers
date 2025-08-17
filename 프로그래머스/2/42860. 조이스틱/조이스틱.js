function solution(name) {
    const n = name.length
    
    let vertical = 0
    for(let i=0;i<n;i++){
        const diff = name.charCodeAt(i) - 65
        vertical+=Math.min(diff,26-diff)
    }
    
    let horizontal = n-1 // 오른쪽으로 쭉가는경우
    
    // 영향을 받는 경우는 A가 연속으로 있을 경우
    // 전환점
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
    return horizontal+vertical
}