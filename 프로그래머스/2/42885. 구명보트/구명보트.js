function solution(people, limit) {
    // 정렬하기
    people.sort((a,b)=>a-b)
    
    let left = 0 // 왼쪽에서 시작하는 index
    let right = people.length - 1 // 오른쪽에서 시작하는 index
    
    let count = 0 // 구명보트 개수
    
    while(left<=right){
        if(people[left] + people[right]<=limit){
            left+=1
        }
        right-=1
        count+=1
    }
    return count
}