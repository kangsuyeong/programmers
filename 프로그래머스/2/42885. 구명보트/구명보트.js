function solution(people, limit) {
    let count = 0 // 보트의 개수
    const n = people.length
    people.sort((a,b)=>a-b)
    
    let left = 0
    let right = n-1
    while(left<=right){
        // 만약 왼쪽 오른쪽 다 태울수 있다면
        if(people[left] + people[right] <=limit){
            left++
        }
        
        // 기본적으로 오른쪽만 태우기
        right--
        count++
    }
    return count
}