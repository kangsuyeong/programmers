function solution(name) {
    const n = name.length
    
    let vertical = 0
    // 위쪽으로 이동하는 경우 계산
    for(let i=0;i<n;i++){
        const diff = name.charCodeAt(i) - 65
        vertical+=Math.min(diff,26-diff)
    }
    
    // 커서 이동하는 경우 계산
    // 커서 이동의 영향을 받는 것을 A가 연속으로 있을때이다.
    let horizontal = n-1 // 왼쪽-> 오른쪽으로 이동햇을때 최소값
    // 회전 지점
    for(let i=0;i<n;i++){
        let next = i+1
        // 회전 지점은 다음 칸이 A일 경우에만 영향력은 가진다.
        if(name[next]!=='A') continue
        
        // A가 어디까지 연속인지 게산
        while(next<n && name[next]==='A') next++
        
        horizontal=Math.min(
            horizontal,
            i*2+(n-next),
            (n-next)*2+i
        )
        
    }
    return horizontal+ vertical
}