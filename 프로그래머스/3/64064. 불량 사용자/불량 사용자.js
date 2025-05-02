function isMatch(userId,bannedId){
    if(userId.length!==bannedId.length) return false
    
    for(let i=0;i<userId.length;i++){
        if(bannedId[i]==='*') continue
        
        if(userId[i]!==bannedId[i]) return false
    }
    
    return true
}

function solution(user_id, banned_id) {
    const result = new Set()
    
    function dfs(index,selected){
        if(index===banned_id.length){
            const sorted = [...selected].sort().join(',')
            result.add(sorted)
            return
        }
        
        for(let i=0;i<user_id.length;i++){
            if(selected.has(user_id[i])) continue
            if(!isMatch(user_id[i],banned_id[index])) continue
            
            selected.add(user_id[i])
            dfs(index+1,selected)
            selected.delete(user_id[i])
        }
    }
    
    dfs(0,new Set())
    return result.size
}