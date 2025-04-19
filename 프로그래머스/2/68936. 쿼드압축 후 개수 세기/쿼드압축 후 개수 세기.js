function solution(arr) {
    const result = [0,0] // 0, 1의 총 갯수
    
    function compress(x,y,size){
        const first = arr[x][y] // 첫번째 문자열
        
        // 1 X 1 일때 가지치기
        if(size===1){
            result[first]+=1
            return
        }
        
        for(let i=x;i<x+size;i++){
            for(let j=y;j<y+size;j++){
                // 첫번째 문자열과 나머지 문자열이 다를경우 1/4로 쪼개기
                if(first!==arr[i][j]){
                    const half = size/2
                    compress(x,y,half)
                    compress(x+half,y,half)
                    compress(x,y+half,half)
                    compress(x+half,y+half,half)
                    return
                }
            }
        }
        
        // 모든 문자열이 다 같은 경우
        result[first]+=1
    }
    
    compress(0,0,arr.length)
    
    return result 
}