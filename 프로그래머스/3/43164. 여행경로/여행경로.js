function solution(tickets) {
    // 알파벳 순서대로 정렬
    tickets.sort()
    
    let result = [ ]
    const visited = Array(tickets.length).fill(false)
    let found = false
    
    function dfs(current,path,depth){
        if(found) return
        
        if(depth===tickets.length){
            result=[...path]
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