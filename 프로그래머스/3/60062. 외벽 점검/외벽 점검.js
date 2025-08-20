function getPermutaions(arr,n){
    const result = []
    if(n===1) return arr.map(v=>[v])
    
    arr.forEach((fixed,idx,origin)=>{
        const rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
        const restPermutaions = getPermutaions(rest,n-1)
        const combined = restPermutaions.map(p=>[fixed,...p])
        result.push(...combined)
    })
    return result
}

// function solution(n, weak, dist) {
//     const weakLength = weak.length
    
//     const linearWeak = [...weak]
    
//     for(let i=0;i<weakLength;i++){
//         linearWeak.push(weak[i] + n)
//     }
    
//     let result = dist.length+1
    
//     // 최소 인원 찾기
//     for(let i=1;i<=dist.length;i++){
//         const permutaions = getPermutaions(dist,i)
        
//         for(const perm of permutaions){
            
//             // 취약점 어디부터 확인할것인가?
//             for(let start = 0;start<weakLength;start++){
//                 const segment = linearWeak.slice(start,start+weakLength)
//                 let count = 1 // 친구수
//                 let cover = segment[0] + perm[0]
                
//                 // 취약 지역 확인하며 커버 여부 확인
//                 for(let j=0;j<segment.length;j++){
//                     if(segment[j]>cover){
//                         count++
//                         if(count>i) break;
//                         cover = segment[j] + perm[count-1]
//                     }
                    
//                     if(j===segment.length-1){
//                         result=Math.min(result,count)
//                     }
//                 }
//             }
//         }
//     }
//     return result > dist.length ? -1 : result
// }

function solution(n, weak, dist) {
    const weakLen = weak.length;

    // 1. 원형 문제를 직선 문제로 변환하기 위해 배열을 2배로 확장
    const linearWeak = [...weak];
    for (let i = 0; i < weakLen; i++) {
        linearWeak.push(weak[i] + n);
    }

    // 2. 투입할 친구 수를 1명부터 늘려가며 최소값 탐색
    for (let numFriends = 1; numFriends <= dist.length; numFriends++) {
        // 3. 현재 친구 수로 만들 수 있는 모든 순서(순열)를 구함
        const permutations = getPermutaions(dist, numFriends);

        // 4. 각각의 순열(친구 투입 순서)에 대해 시도
        for (const p of permutations) {
            // 5. 모든 취약점을 시작점으로 설정하여 시도
            for (let startIdx = 0; startIdx < weakLen; startIdx++) {
                let friendsUsed = 1;
                // 첫 친구가 점검할 수 있는 마지막 위치
                let coverageEnd = linearWeak[startIdx] + p[0];

                // 6. 시작점부터 weakLen개의 모든 지점을 점검하는 시뮬레이션
                for (let i = startIdx + 1; i < startIdx + weakLen; i++) {
                    // 현재 지점이 점검 범위를 벗어났다면
                    if (linearWeak[i] > coverageEnd) {
                        friendsUsed++; // 다음 친구 투입
                        // 새 친구가 현재 지점에서 점검할 수 있는 마지막 위치
                        coverageEnd = linearWeak[i] + p[friendsUsed - 1];
                    }
                }

                // 7. 사용한 친구 수가 현재 순열의 친구 수 이하라면 성공
                if (friendsUsed <= numFriends) {
                    return numFriends; // 최소 인원이므로 즉시 반환
                }
            }
        }
    }

    // 모든 경우를 시도해도 점검이 불가능한 경우
    return -1;
}