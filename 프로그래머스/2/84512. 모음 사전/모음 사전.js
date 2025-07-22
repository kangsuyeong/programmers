function solution(word) {
    const chars = ['A', 'E', 'I', 'O', 'U']
    const words = []
    
    function dfs(current){
        if(current.length>5) return
        if(current.length>0) words.push(current)

        for(let i=0;i<5;i++){
            dfs(current+chars[i])
        }
    }
    dfs('')
    return words.indexOf(word) + 1
}