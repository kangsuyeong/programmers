class Queue{
    constructor(){
        this.items=[]
        this.rear=0
        this.front=0
    }
    push(item){
        this.items.push(item)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    size(){
        return this.rear-this.front
    }
}

function solution(begin, target, words) {
    // 단어 집합의 개수
    const n = words.length
    
    // 단어의 길이
    const m = begin.length
    if(!words.includes(target)) return 0
    
    const visited = Array(n).fill(false)
    
    const queue = new Queue()
    queue.push([begin,0])
    
    while(queue.size()>0){
        const [current,depth] = queue.pop()
        
        if(current===target) return depth
        
        if(visited.includes(current)) continue
        
        
        for(let i=0;i<n;i++){
            // 문자 몇개나 같은지
            let count =0
            for(let j=0;j<m;j++){
                if(current[j]===words[i][j]) count++
            }
            
            if(count===m-1){
                queue.push([words[i],depth+1])
                visited[i] = true
            }
        }
    }
    
    
}