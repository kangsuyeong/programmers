function solution(cacheSize, cities) {
    if(cacheSize===0) return cities.length*5
    
    const cache = []
    let result = 0
    
    for(const city of cities){
        const c = city.toLowerCase()
        const index = cache.indexOf(c)
        
        // miss
        if(index===-1){
            result+=5
            if(cache.length===cacheSize) cache.shift()
            cache.push(c)
        }
        else{
            result+=1
            cache.splice(index,1)
            cache.push(c)
        }
    }
    return result
}