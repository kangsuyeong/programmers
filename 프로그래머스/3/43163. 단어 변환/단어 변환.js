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
    const n = words.length
    const queue = new Queue()

    const visited = Array(n).fill(false)
    
    queue.push([begin,0])
    while(queue.size()>0){
        const [current_word,count] = queue.pop()

        if(current_word===target) return count
        
        for(let i=0;i<n;i++){
            if(visited[i]) continue
            
            const word_length = begin.length
            let word_count = 0
            for(let j=0;j<word_length;j++){
                if(current_word[j]===words[i][j]) word_count++
            }
            
            if(word_length-1===word_count){
                queue.push([words[i],count+1])
                visited[i] = true
            }
            
        }
        
        
    }
    return 0
}