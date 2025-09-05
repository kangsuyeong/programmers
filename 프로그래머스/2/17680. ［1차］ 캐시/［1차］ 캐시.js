function solution(cacheSize, cities) {
    
    if(cacheSize===0) return cities.length*5
    
    const cache = []
    let result = 0
    
    for(const city of cities){
        
        const c = city.toLowerCase()
        const idx = cache.indexOf(c)
        
        
        // hit
        if(idx!==-1){
            result+=1
            cache.splice(idx,1)
            cache.push(c)
        }
        else{
            result+=5
            if(cache.length===cacheSize) cache.shift()
            cache.push(c)
        }
    }
    return result
}