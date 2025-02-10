function solution(brown, yellow) {
    const block = brown+yellow;
    let h=1
    
    while(true){
        let w = yellow / h
        if(block === (w+2)*(h+2)) return [w+2,h+2]
        h++
    }
    
}