function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    
    const directions = [
        [1,0],
        [-1,0],
        [0,-1],
        [0,1]
    ]
    
    const result=[]
    const visited = Array.from({length:n},()=>Array(m).fill(false))
    
    function isRange(x,y){
        return 0<=x && x<n && 0<=y && y<m
    }
    
    function dfs(x,y){
        let land=Number(maps[x][y])
        visited[x][y] = true
        for(const [dx,dy] of directions){
            const nx = x + dx
            const ny = y + dy
            if(isRange(nx,ny) &&maps[nx][ny]!=='X' && !visited[nx][ny]){
                land += dfs(nx,ny)
            }
        }
        
        return land
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(maps[i][j]!=='X' && !visited[i][j]){
                result.push(dfs(i,j))
            }
        }
    }
    return result.length > 0 ? result.sort((a,b)=>a-b) : [-1]
}