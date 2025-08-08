

function solution(n, build_frame) {
    const result = []
    
    function isValid(){
        // 현재 result 순회
        for(const [x,y,a] of result){
            // 기둥일 경우
            const 바닥위 = y===0
            const 보의한쪽끝부분위 
            = result.some(([nx,ny,na])=>na===1 && ((nx===x && ny===y)|| (nx+1===x && ny===y)))
            const 또다른기둥위
            = result.some(([nx,ny,na])=>na===0 && nx===x && ny+1===y)
            
            // 보일 경우
            const 한쪽끝부분이기둥위
            = result.some(([nx,ny,na])=>na===0 && ((nx-1===x && y===ny+1) || (nx===x && y===ny+1)) )
            const 양쪽끝부분이다른보와동시에연결
            = result.some(([nx,ny,na])=>na===1 && nx+1===x && y===ny) &&
              result.some(([nx,ny,na])=>na===1 && nx===x+1 && y===ny)
            
            // 기둥일 경우
            if(a===0){
                if(바닥위 || 보의한쪽끝부분위 || 또다른기둥위) continue
                
                return false
            }
            // 보일 경우
            else{
                if(한쪽끝부분이기둥위 || 양쪽끝부분이다른보와동시에연결) continue
                return false
            }
        }
        return true
    }
    
    for(const [x,y,a,b] of build_frame){
        // 설치일 경우
        if(b===1){
            result.push([x,y,a])
            if(!isValid()) result.pop()
        }
        // 삭제일 경우
        else{
            const index = result.findIndex(([nx,ny,na])=>nx===x && ny===y && na===a)
            const temp = result.splice(index,1)
            if(!isValid()) result.push(temp[0])
        }
    }
    return result.sort((a,b)=>a[0]-b[0] || a[1]-b[1] || a[2]-b[2])
}