function solution(word) {
    const chars = [ 'A', 'E', 'I', 'O', 'U']
    const words = []
    
    function dfs(current,depth){
        if(depth===5) return
        
        words.push(current)
        for(let i=0;i<5;i++){
            dfs(current+chars[i],depth+1)
        }
    }
    
    for(let i=0;i<5;i++){
        dfs(chars[i],0)
    }
    
    return words.indexOf(word) + 1;
}