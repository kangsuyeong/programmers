function isMatch(u_id,b_id){
    if(u_id.length!==b_id.length) return false
    
    for(let i=0;i<u_id.length;i++){
        if(b_id[i]==='*') continue
        
        if(u_id[i]!==b_id[i])  return false
    }
    return true
}

function solution(user_id, banned_id) {
    let result = new Set() // 가능한 목록
    
    function dfs(index,selected){
        if(index===banned_id.length){
            const sorted = [...selected].sort().join(',')
            result.add(sorted)
            return
        }
        
        for(let i=0;i<user_id.length;i++){
            if(selected.has(user_id[i])) continue
            
            if(isMatch(user_id[i],banned_id[index])){
                selected.add(user_id[i])
                dfs(index+1,selected)
                selected.delete(user_id[i])
            }
        }
    }
    dfs(0,new Set())
    return result.size
}