function solution(clothes) {
    let count = 1
    const clothMap = new Map()
    
    for(const [_,kind] of clothes){
        clothMap.set(kind,(clothMap.get(kind)||0)+1)
    }
   for(const [_,value] of clothMap){
       count*=value+1
   }
    return count-1
}