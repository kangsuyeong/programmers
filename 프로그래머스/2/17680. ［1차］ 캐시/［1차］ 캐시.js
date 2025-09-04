function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    let result = 0
    const caches = []
    
    for(const city of cities){
        const c = city.toLowerCase()
        const idx = caches.indexOf(c)
        
        // hit일 경우
        if(idx!==-1){
            result+=1
            caches.splice(idx,1)
            caches.push(c)
        }
        else{
            result+=5
            if(caches.length===cacheSize) caches.shift()
            caches.push(c)
        }
        
    }
    return result
}