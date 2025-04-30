function isValid(people,place){
    // 조합 확인하기
    for(let i=0;i<people.length-1;i++){
        for(let j=i+1;j<people.length;j++){
            const [x1,y1] = people[i] // 첫번째 사람
            const [x2,y2] = people[j] // 두번째 사람
            
            const distance = Math.abs(x1-x2) + Math.abs(y1-y2)
            
            // 거리가 3 이상이면 continue
            if(distance>=3) continue
            
            // 거리가 2미만이면 무조건 거리 지키기 X
            if(distance<2) return false
            
            // 거리가 2일때만 확인
            
            // 가로로 위치할 경우
            if(x1===x2){
                const midY = (y1+y2)/2
                if(place[x1][midY]!=='X') return false
            }
            else if(y1===y2){
                const minX = (x1+x2)/2
                if(place[minX][y1]!=='X') return false
            }
            else{
                if(place[x2][y1]!=='X' || place[x1][y2]!=='X') return false
            }
            
        }
    }
    return true
}

function solution(places) {
    const result =[] // 대기실별 결과
    
    for(const place of places){
        const people = [] // 현재 사람이 있는 좌표
        
        // 사람의 위치 확인하기
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]==='P'){
                    people.push([i,j])
                }
            }
        }
        
        if(isValid(people,place)){
            result.push(1)
        }
        else{
            result.push(0)
        }
        

    }
    return result
}