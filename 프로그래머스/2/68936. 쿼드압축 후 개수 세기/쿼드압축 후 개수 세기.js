function solution(arr) {
    const result=[0,0]
    function split(x,y,size){
        const first = arr[x][y]
        
        // if(size===1){
        //     result[first]+=1
        //     return
        // }
        
        for(let i=x;i<x+size;i++){
            for(let j=y;j<y+size;j++){
                if(first!==arr[i][j]){
                    const half = size/2
                    split(x,y,half)
                    split(x+half,y,half)
                    split(x,y+half,half)
                    split(x+half,y+half,half)
                    return
                }
            }
        }
        
        result[first]+=1
    }
    split(0,0,arr.length)
    return result
}