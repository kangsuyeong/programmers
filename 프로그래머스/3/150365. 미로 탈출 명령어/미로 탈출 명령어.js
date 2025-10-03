function solution(n, m, x, y, r, c, k) {
    const direction =[ ['d',1,0],['l',0,-1],['r',0,1],['u',-1,0]] // [str,dr,dc]
    
    let result = "impossible"
    
    function isRange(row,col){
        return 1<=row && row<=n && 1<=col && col<=m
    }
    
    function dfs(row,col,depth,string){
        if(result!=="impossible") return
        
        
        const dist = Math.abs(row-r) + Math.abs(col-c)
        const remain_move = k-depth
        
        if(dist > remain_move || (dist-remain_move)%2!==0) return
        
        
        if(depth===k){
            if(row===r && col===c){
                result=string
            }
            return
        }
        
        for(const [str,dr,dc] of direction){
            const nr = row + dr
            const nc = col + dc
            if(!isRange(nr,nc)) continue
            
            dfs(nr,nc,depth+1,string+str)
        }
    }
    dfs(x,y,0,'')
    return result
}