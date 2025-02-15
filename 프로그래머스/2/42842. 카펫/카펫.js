function solution(brown, yellow) {
    const block = brown + yellow // 전체 블록 갯수
    let yellow_h = 1 // 노란 블럭의 높이
    while(true){
        if(yellow%yellow_h===0){
            const yellow_w = yellow/yellow_h
            if(block === (yellow_w+2)*(yellow_h+2)){
                return [yellow_w+2,yellow_h+2]
            }
        }
        yellow_h++
    }
    
}