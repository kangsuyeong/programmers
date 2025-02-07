function solution(topping) {
    let result=0
    const right = new Map()
    for(const t of topping){
        right.set(t,(right.get(t)||0)+1)
    }
    const left = new Set()
    for(const t of topping){
        left.add(t)
        right.set(t,right.get(t)-1)
        if(right.get(t)===0){
            right.delete(t)
        }
        if(left.size===right.size){
            result+=1
        }
    }
    return result
}