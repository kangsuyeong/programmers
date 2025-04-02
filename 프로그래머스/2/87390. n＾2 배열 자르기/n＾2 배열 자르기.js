function solution(n, left, right) {
    const result=[]
    for(let i=left;i<=right;i++){
        const col = Math.floor(i/n)
        const row = i%n
        const num = Math.max(col,row) + 1
        result.push(num)
    }
    return result
}