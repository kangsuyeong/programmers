function solution(keyinput, board) {
    let x=0
    let y=0
    const n = Math.floor(board[0]/2)
    const m = Math.floor(board[1]/2)
    const direction={
        left:[-1,0],
        right:[1,0],
        up:[0,1],
        down:[0,-1]
    }
    function isRange(x,y){
        return -n<=x && x<=n && -m<=y && m>=y
    }
    for(const key of keyinput){
        [dx,dy] = direction[key]
        const nx = x + dx
        const ny = y + dy
        if(isRange(nx,ny)){
            x=nx
            y=ny
        }
    }
    return [x,y]
}