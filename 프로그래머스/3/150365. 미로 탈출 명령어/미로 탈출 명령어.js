function solution(n, m, x, y, r, c, k) {
    const direction = [['d',1,0],['l',0,-1],['r',0,1],['u',-1,0]]
    
    function isRange(x,y){
        return 1<=x && x<=n && 1<=y && y<=m
    }
    let result = "impossible"
    function dfs(depth,x,y,string){
        
        if(result!=="impossible") return
        
        if(depth===k){
            if(x===r && y===c) result=string
            return
        }
        
        
        // 남은 거리
        const dist = Math.abs(x-r) + Math.abs(y-c)
        // 남은 움직임
        const move = k-depth
        
        if(dist>move || (move-dist)%2!==0) return
        
        for(const [str,dx,dy] of direction){
            const nx = dx + x
            const ny = dy + y
            
            if(!isRange(nx,ny)) continue
            dfs(depth+1,nx,ny,string+str)
        }
    }
    dfs(0,x,y,'')
    return result
}