function solution(board, skill) {
    const n = board.length
    const m = board[0].length
    const psum = Array.from({length:n+1},()=>Array(m+1).fill(0))
    
    for(const [type, r1, c1, r2, c2, degree] of skill){
        const value = type===2 ?  degree: -degree
        
        psum[r1][c1] += value
        psum[r1][c2+1] -= value
        psum[r2+1][c1] -= value
        psum[r2+1][c2+1] +=value
    }
    
    // 가로 전파
    for(let row=0;row<n;row++){
        for(let col=1;col<m;col++){
            psum[row][col] +=psum[row][col-1]
        }
    }
    
    for(let col=0;col<m;col++){
        for(let row=1;row<n;row++){
            psum[row][col] +=psum[row-1][col]
        }
    }
    
    for(let row=0;row<n;row++){
        for(let col=0;col<m;col++){
            board[row][col] +=psum[row][col]
        }
    }
    let result=0
    for(let row=0;row<n;row++){
        for(let col=0;col<m;col++){
            if(board[row][col]>0) result++
        }
    }
    return result
}