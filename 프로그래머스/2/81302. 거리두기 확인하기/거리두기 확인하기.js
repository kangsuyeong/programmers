function solution(places) {
    const result = []
    for(const place of places){
        const p = []
        // p의 위치 확인하기
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]==='P'){
                    p.push([i,j])
                }
            }
        }

        function checkDistance(arr){
            for(let i=0;i<arr.length-1;i++){
                for(let j=i+1;j<arr.length;j++){
                    const [x1,y1] = arr[i]
                    const [x2,y2] = arr[j]
                    const length = Math.abs(x1-x2) + Math.abs(y1-y2)
                    if(length<=2){
                        // 일자로 파티션 있는 경우
                        // 행이 같고, 그 사이의 가 X값 을 가지는 경우
                        if(x1===x2){
                            const newY = Math.min(y1,y2) + 1
                            if(place[x1][newY]==='X') continue
                        }
                        else if(y1===y2){
                            const newX = Math.min(x1,x2) + 1
                            if(place[newX][y1]==='X') continue
                        }
                        else if(place[x2][y1]==='X' && place[x1][y2]==='X') continue
                        return 0
                    }
                }
            }
            return 1
        }
        result.push(checkDistance(p))
    }
    return result
}