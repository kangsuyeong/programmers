function solution(tickets) {
    tickets.sort()
    
    const visited = Array(tickets.length).fill(false)
    let result = []
    let found = false
    
    function dfs(depth,path,current){
        if(found) return
        
        if(depth===tickets.length){
            result=[...path]
            found=true
            return
        }
        
        for(let i=0;i<tickets.length;i++){
            const [start,end] = tickets[i]
            if(!visited[i] && current===start){
                visited[i]=true
                dfs(depth+1,[...path,end],end)
                visited[i]=false
            }
        }
    }
    
    dfs( 0,["ICN"],"ICN");
    
    return result
}