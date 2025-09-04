function solution(n) {
    let result = 0
    
    const queens = []
    
    function isValid(row,col){
        for(const [nr,nc] of queens){
            if(col===nc || Math.abs(nr-row)===Math.abs(nc-col)) return false
        }
        return true
    }
    
    function dfs(row){
        if(row===n){
            result+=1
            return
        }
        
        for(let col=0;col<n;col++){
            if(isValid(row,col)){
                queens.push([row,col])
                dfs(row+1)
                queens.pop()
            }
        }
    }
    
    dfs(0)
    
    return result
}