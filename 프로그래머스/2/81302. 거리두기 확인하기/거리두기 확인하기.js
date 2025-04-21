function solution(places) {
    const result = []
    for(const place of places){
        const people = [] // 사람의 위치
        // p의 위치 확인하기
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]==='P'){
                    people.push([i,j])
                }
            }
        }
        
        
        function checkDistance(){
            for(let i=0;i<people.length-1;i++){
                for(let j=i+1;j<people.length;j++){
                    const [x1,y1] = people[i]
                    const [x2,y2] = people[j]
                    const length = Math.abs(x1-x2) + Math.abs(y1-y2)
                    
                    // 맨헤튼 거리가 2 이상이면 pass
                    if(length>2) continue
                    
                    if(length===2){
                        // 일자로 파티션 있는 경우
                        // 행이 같고, 그 사이의 가 X값 을 가지는 경우
                        if(x1===x2){
                            const midY = (y1+y2)/2
                            if(place[x1][midY]==='X') continue
                        }
                        else if(y1===y2){
                            const midX = (x1+x2)/2
                            if(place[midX][y1]==='X') continue
                        }
                        else if(place[x2][y1]==='X' && place[x1][y2]==='X') continue
                    }
                    return 0
                    
                }
            }
            return 1
        }
        result.push(checkDistance())
    }
    return result
}