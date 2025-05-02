function isValid(people,place){
    for(let i=0;i<people.length-1;i++){
        for(let j=i+1;j<people.length;j++){
            const [x1,y1] = people[i] // 사람 1의 좌표
            const [x2,y2] = people[j] // 사람 2의 좌표

            const distance = Math.abs(x1-x2) + Math.abs(y1-y2) // 거리

            if(distance===1) return false 
            if(distance>2) continue
            
            //거리가 2일 경우
            
            // 가로로 있을경우
            if(x1===x2){
                const midY = (y1+y2)/2
                if(place[x1][midY]!=='X') return false
            }
            // 세로로 있을 경우
            else if(y1===y2){
                const midX = (x1+x2)/2
                if(place[midX][y1]!=='X') return false
            }
            
            // 대각선일 경우
            else{
                if(place[x1][y2]!=='X' || place[x2][y1]!=='X') return false
            }

        }
    }
    return true
}

function solution(places) {
    const result = []
    
    for(const place of places){
        const people = [] // 사람의 좌표 저장
        
        // 사람 좌표 찾기
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]==='P'){
                    people.push([i,j])
                }
            }
        }
        // console.log(people)
        
        // 각각의 거리 계산하기
        if(isValid(people,place)){
            result.push(1)
        }
        else{
            result.push(0)
        }
    }
    return result
}