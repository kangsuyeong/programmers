function solution(n) {
    let result = 0
    const queen = []
    
    function isValid(row,col){
        for(let i=0;i<row;i++){
            if(queen[i]===col || Math.abs(col-queen[i])===row-i) return false
        }
        return true
    }
    
    function dfs(row){
        if(row===n){
            result++
        }
        // col 탐색
        for(let col=0;col<n;col++){
            if(isValid(row,col)){
                queen[row] = col
                dfs(row+1)
            }
        }
    }
    
    dfs(0)
    
    return result
}