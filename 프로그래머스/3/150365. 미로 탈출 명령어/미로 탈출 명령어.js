function solution(n, m, x, y, r, c, k) {
    const direction = [['d',1,0],['l',0,-1],['r',0,1],['u',-1,0]]
    
    function isRange(x,y){
        return 1<=x && x<=n && 1<=y && y<=m
    }
    
    let result = "impossible"
    
    function dfs(x,y,string,depth){
        if(result!=="impossible") return
        
        if(depth===k){
            if(x===r && y===c){
                result = string
            }
            return
        }
        
        // 남은 거리
        const distacne = Math.abs(x-r) + Math.abs(y-c)
        
        // 움직일 수 있는 수
        const move = k - depth
        
        if(distacne > move || (move-distacne)%2!==0) return
        
        
        for(const [str,dx,dy] of direction){
            const nx = dx + x
            const ny = dy + y
            
            if(!isRange(nx,ny)) continue
            dfs(nx,ny,string+str,depth+1)
        }
        
    }
    dfs(x,y,'',0)
    return result
}