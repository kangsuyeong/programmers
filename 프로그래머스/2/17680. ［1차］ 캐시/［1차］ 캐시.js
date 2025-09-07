function solution(cacheSize, cities) {
    if(cacheSize===0) return cities.length*5 
    
    let result = 0
    const cache = []
    
    for(const city of cities){
        const c = city.toLowerCase()
        const index = cache.indexOf(c)
        
        
        // hit 일경우
        if(index!==-1){
            result+=1
            cache.splice(index,1)
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