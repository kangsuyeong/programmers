function solution(begin, target, words) {
    // 전체 단어 개수
    const n= words.length
    
    // 문자열 길이
    const m = begin.length
    const visited = new Set()
    
    const queue = []
    queue.push([begin,0])
    
    while(queue.length>0){
        const [currentWord,depth] = queue.shift()
        if(currentWord===target) return depth
        
        for(let i=0;i<n;i++){
            const item = words[i]
            if(visited.has(item)) continue
            
            // 몇개의 단어가 같은지
            let count =0
            for(let j=0;j<m;j++){
                if(currentWord[j]===item[j]) count++
            }
            
            if(count===m-1){
                queue.push([item,depth+1])
                visited.add(item)
            }
        }
        
        
    }
    return 0
}