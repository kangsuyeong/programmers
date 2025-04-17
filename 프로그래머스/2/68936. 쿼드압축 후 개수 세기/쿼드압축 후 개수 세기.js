function solution(arr) {
    const result =[0,0] // 0 / 1의 갯수
    
    function compress(x,y,size){
        const first = arr[x][y] // 가장 첫번째 숫자
        
        // 첫번째 문자열과 나머지가 같은지 순회하기
        for(let i=x;i<x+size;i++){
            for(let j=y;j<y+size;j++){
                // 같지않다면 쪼개기
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
        // 만약 다같다면 +1 해주기
        result[first]+=1
    }
    
    compress(0,0,arr.length)
    return result
}