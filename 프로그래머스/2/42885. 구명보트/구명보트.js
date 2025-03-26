function solution(people, limit) {
    
    // 필요한 구명보트 수
    let count =0

    // index
    let left = 0
    let right = people.length-1
    
    // 정렬하기
    people.sort((a,b)=>a-b)
    
    while(left<right){
        if(people[left]+people[right]<=limit){
            left++
            right--
            count++
        }
        else{
            right--
            count++
        }
    }
    
    if(left===right){
        count++
    }
    
    return count
}