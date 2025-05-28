function solution(n, left, right) {
    const result = []
    
    for(let i=left;i<=right;i++){
        const col = Math.floor(i/n)
        const row = i - col*n
        result.push(Math.max(col+1,row+1))
    }
    return result
}