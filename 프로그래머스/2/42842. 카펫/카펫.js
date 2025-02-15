function solution(brown, yellow) {
    const block = yellow + brown // 전체 블록갯수
    let yellow_h = 1 // 노란색의 높이
    
    while(true){
        // 너비가 정수 일때만
        if(yellow%yellow_h===0){
            const yellow_w = yellow/yellow_h // 노란색의 너비
            // 노란색의 너비+2 X 노란색의 높이+2가 전체 블록의 갯수일때
            if(block===(yellow_h+2)*(yellow_w+2)){
                return [yellow_w+2,yellow_h+2]
            }
        }
        yellow_h++ // 높이 업데이트하기
    }
    
}