function solution(n) {
    let result = 0
    const queen = []
    
    function isValid(row,col){
        for(const [nr,nc] of queen){
            if(col===nc || Math.abs(nr-row)===Math.abs(nc-col)) return false
        }
        return true
    }
    
    function dfs(row){
        if(row===n){
            result++
            return
        }
        
        for(let col=0;col<n;col++){
            if(isValid(row,col)){
                queen.push([row,col])
                dfs(row+1)
                queen.pop()
            }
        }
        
    }
    
    dfs(0)
    
    return result
}