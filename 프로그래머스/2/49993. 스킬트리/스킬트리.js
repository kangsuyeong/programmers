function solution(skill, skill_trees) {
    let result = 0
    
    const s = skill.split('')
    
    for(const tree of skill_trees){
        let index = 0
        let check = true
        for(const item of tree){
            const item_index = s.indexOf(item)
            
            // 없는 경우 패스
            if(item_index===-1) continue
            
            //
            if(index < item_index){
                check=false
                break;
            }
            
            index++
            
        }
        
        if(check) result++
        
    }
    return result
}