function solution(money) {
    const n = money.length
    const dp1= Array(n).fill(0)
    const dp2= Array(n).fill(0)
    
    // 첫집을 무조건 방문
    dp1[0] = money[0]
    // 첫번째 집을 무조건 방문하니깐 두번째 집은 방문 못함
    dp1[1] = dp1[0]
    
    for(let i=2;i<n;i++){
        dp1[i] = Math.max(dp1[i-1],dp1[i-2]+money[i])
    }
    
    dp2[1] = money[1]
    for(let i=2;i<n;i++){
        dp2[i] = Math.max(dp2[i-1],dp2[i-2]+money[i])
    }
    
    return Math.max(dp1[n-2],dp2[n-1])
    
}