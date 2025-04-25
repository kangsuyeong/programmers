function solution(citations) {
    let index = 0
    
    for(let i=1;i<=citations.length;i++){
        if(citations.filter(v=>v>=i).length>=i){
            index = i
        }
    }
    return index
}