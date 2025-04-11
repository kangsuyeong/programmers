function solution(n, m, x, y, r, c, k) {
    let result = 'impossible';
    const directions = [[1,0,'d'],[0,-1,'l'],[0,1,'r'],[-1,0,'u']]
    
    function isRange(x,y){
        return 1<=x && x<=n && 1<=y && y<=m
    }
    
    function dfs(x,y,depth,string){
        const dist = Math.abs(x - r) + Math.abs(y - c); // 최단거리
        const remain = k - depth; // 남은거리
        
        
        // ❗ 가지치기 조건 추가
        if (dist > remain || (remain - dist) % 2 !== 0) return;
        
        if(depth===k){
            if(x===r && y===c){
                result=string 
            }
            return
        }
        for(const [dx,dy,word] of directions){
            const nx = dx + x
            const ny = dy + y
            if(isRange(nx,ny)){
                dfs(nx,ny,depth+1,string+word)
                if (result !== 'impossible') return; // 이미 정답 찾았으면 종료
            }
        }
        
    }
    dfs(x,y,0,'')
    return result
}