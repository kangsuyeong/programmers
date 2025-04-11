function solution(n, m, x, y, r, c, k) {
    let result = "impossible"
    const directions=[
        [1,0,'d'],
        [0,-1,'l'],
        [0,1,'r'],
        [-1,0,'u']
    ]
    
    function isRange(x,y){
        return 1<=x && x<=n && 1<=y && y<=m
    }
    
    function dfs(x,y,depth,string){
        // 길이가 k일때
        if(depth===k){
            // 탈출했을 때
            if(x===r && y===c){
                result=string
            }
            return
        }
        
        const dist = Math.abs(x-r) + Math.abs(y-c) // 현재 위치에서 탈출까지 거리
        const remain = k-depth // 이동할 수 있는 거리
        
        if(dist>remain || (remain-dist)%2!==0) return
        
        for(const [dx,dy,dir] of directions){
            const nx = x + dx
            const ny = y + dy
            if(isRange(nx,ny)){
                dfs(nx,ny,depth+1,string+dir)
                if(result!=='impossible') return
            }
        }
        
    }
    
    dfs(x,y,0,'')
    return result
}