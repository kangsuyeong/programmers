function solution(n, m, x, y, r, c, k) {
    let result = ''
    const directions = [
        [1,0,'d'],
        [0,-1,'l'],
        [0,1,'r'],
        [-1,0,'u']
    ]
    
    function isRange(x,y){
        return x>=1 && x<=n && y>=1 && y<=m
    }
    
    function dfs(x,y,depth,string){
        if(result) return 
        const distance = Math.abs(x-r) + Math.abs(y-c) // 현재 남은거리
        const remain = k-depth // 남은 움직일 수 있는거리
        
        if(distance > remain || (remain-distance)%2!==0) return
        
        if(depth===k){
            if(x===r && y===c){
                result=string
            }
            return
        }
        
        for(const [dx,dy,dir] of directions){
            const nx = x + dx
            const ny = y + dy
            if(isRange(nx,ny)){
                dfs(nx,ny,depth+1,string+dir)
            }
        }
    }
    dfs(x,y,0,'')
    
    return result || 'impossible'
}