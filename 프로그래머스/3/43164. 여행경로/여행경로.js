function solution(tickets) {
    const visited = Array(tickets.length).fill(false);
    let result = [];
    let found = false;

    tickets.sort()
    
    
    function dfs(current,path,depth){
        if(found) return
        
        if(depth===tickets.length){
            result = [...path]
            found=true
            return
        }
        
        for(let i=0;i<tickets.length;i++){
            const [start,end] = tickets[i]
            if(!visited[i] && current===start){
                visited[i] = true
                dfs(end,[...path,end],depth+1)
                visited[i] = false
            }
        }
        
    }
    
    dfs('ICN',['ICN'],0)
    
    return result
}