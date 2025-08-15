function solution(name) {
    const n = name.length
    let vertical = 0
    
    // 수직 방향 계산
    for(let i=0;i<n;i++){
        const diff = name.charCodeAt(i) - 65
        vertical += Math.min(diff,26-diff)
    }
    
    let horizontal = n-1 //오른쪽으로 쭉갔을때
    
    
    // 영향이 되는지점 A가 연속으로 있을때
    // 유턴 지점
    for(let i=0;i<n-1;i++){
        let next = i+1
        if(name[next]!=='A') continue
        
        // 마지막 A 계산
        while(name[next]==='A') next++
        
        horizontal=Math.min(
            horizontal,
            i*2+(n-next),
            (n-next)*2 + i
        )
    }
    return horizontal+vertical
}