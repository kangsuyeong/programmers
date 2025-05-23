function solution(board, skill) {
    const n = board.length
    const m = board[0].length
    
    const psum = Array.from({length:n+1},()=>Array(m+1).fill(0))
    
    for(const s of skill){
        const [type,r1,c1,r2,c2,degree] = s
        
        const value = type===1 ? -degree : degree
        
        psum[r1][c1] += value
        psum[r1][c2+1] -= value
        psum[r2+1][c1] -= value
        psum[r2+1][c2+1] +=value
    }
    
    for(let i=0;i<n+1;i++){
        for(let j=1;j<m+1;j++){
            psum[i][j] += psum[i][j-1]
        }
    }
    
    for(let j=0;j<m+1;j++){
        for(let i=1;i<n+1;i++){
            psum[i][j] += psum[i-1][j]
        }
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            board[i][j] += psum[i][j]
        }
    }
    
    let count=0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]>0){
                count+=1
            }
        }
    }
    return count
}