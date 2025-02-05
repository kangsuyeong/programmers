// function solution(keyinput, board) {
//     let result=[0,0]
//     for(const f of keyinput){
//         switch(f){
//             case "left": if(result[0]>-(board[0]-1)/2) result[0]--; break;
//             case "right":if(result[0]<(board[0]-1)/2) result[0]++; break;
//             case "up":if(result[1]<(board[1]-1)/2) result[1]++; break;
//             case "down":if(result[1]>-(board[1]-1)/2) result[1]--; break;
//         }
//     }
//     return result
// }













function solution(keyinput,board){
    let x=0,y=0
    const n = Math.floor(board[0]/2)
    const m = Math.floor(board[1]/2)
    const direction ={
        left : [-1,0],
        right : [1,0],
        up : [0,1],
        down : [0,-1]
    }
    function isRange(x,y){
        return -n<=x && n>=x && -m<=y && m>=y
    }
    for(const key of keyinput){
        const [dx,dy] = direction[key]
        const nx = x + dx
        const ny = y + dy
        if(isRange(nx,ny)){
            x=nx
            y=ny
        }
    }
    return [x,y]
}