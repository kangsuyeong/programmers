function solution(n, m, x, y, r, c, k) {
    const direction = [['d',1,0],['l',0,-1],['r',0,1],['u',-1,0]]
    
    function isRange(x,y){
        return 1<=x && x<=n && 1<=y && y<=m
    }
    
    let result = "impossible"
    
    function dfs(depth,x,y,string){
        
        if(result!=='impossible') return
        
        if(depth===k){
            if(x===r && y===c) result = string
            return
        }
        
        const dist = Math.abs(x-r) + Math.abs(y-c)
        const remain_move = k-depth
        
        if(dist>remain_move || (remain_move-dist)%2!==0) return
        
        for(const [str,dx,dy] of direction){
            const nx = x+dx
            const ny = y+dy
            
            if(!isRange(nx,ny)) continue
            
            dfs(depth+1,nx,ny,string+str)
        }
    }
    dfs(0,x,y,'')
    return result
}