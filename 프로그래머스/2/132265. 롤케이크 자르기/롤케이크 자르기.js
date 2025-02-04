function solution(topping) {
    let result = 0
    
    const leftTopping = new Set()
    const rightTopping = new Map()
    
    for(const t of topping){
        rightTopping.set(t,(rightTopping.get(t) || 0)+1)
    }
    for(const t of topping){
        leftTopping.add(t)
        rightTopping.set(t,rightTopping.get(t)-1)
        if(rightTopping.get(t)===0){
            rightTopping.delete(t)
        }
        if(rightTopping.size===leftTopping.size){
            result+=1
        }
    }
    return result
}