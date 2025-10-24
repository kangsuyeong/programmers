function solution(begin, target, words) {
    const n = words.length
    
    const visited = Array(n).fill(false)
    
    const queue = []
    queue.push([begin,0])
    
    while(queue.length>0){
        const [currentWord,depth] = queue.shift()
        if(currentWord===target) return depth
        
        for(let i=0;i<n;i++){
            if(visited[i]) continue
            let count = 0
            for(let j=0;j<begin.length;j++){
                if(currentWord[j]===words[i][j]) count++
            }
            
            if(count===begin.length-1){
                queue.push([words[i],depth+1])
                visited[i] = true
            }

        }
        
    }
    return 0
}