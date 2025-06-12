function solution(clothes) {
    const clothMap = new Map()
    let result = 1
    
    for(const [cloth,kind] of clothes){
        clothMap.set(kind,(clothMap.get(kind)||0)+1)
    }
    for(const [_,value] of clothMap){
        result*=value+1
    }
    return result-1
}