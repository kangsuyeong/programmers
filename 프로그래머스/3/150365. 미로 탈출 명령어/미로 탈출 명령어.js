function solution(n, m, x, y, r, c, k) {
    let result = ''
    const directions = [
        [1,0,'d'],
        [0,-1,'l'],
        [0,1,'r'],
        [-1,0,'u']
    ]
    
    function isRange(cx,cy){
        return cx>0 && cx<=n && cy>0 && cy<=m
    }
    
    function dfs(cx,cy,depth,string){
        if(depth===k){
            if(cx===r && cy===c){
                result = string
            }
            return
        }
        
        if(result) return // result 값이 이미 있다면 탐색 X
        
        const distance = Math.abs(cx-r) + Math.abs(cy-c) // 현재 남은 거리
        const can_move = k-depth // 움직일 수 있는 횟수
        
        if(distance>can_move || (can_move-distance)%2!==0) return
        
        for(const [dx,dy,dir] of directions){
            const nx = cx + dx
            const ny = cy + dy
            if(isRange(nx,ny)){
                dfs(nx,ny,depth+1,string+dir)
            }
        }
        
    }
    dfs(x,y,0,'')
    return result ? result : 'impossible'
}