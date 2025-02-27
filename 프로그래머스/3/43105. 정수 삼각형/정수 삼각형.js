function solution(triangle) {
    const n = triangle.length;
    let dp = [...triangle[n - 1]]; // 마지막 행을 초기 dp로 사용

    for (let i = n - 2; i >= 0; i--) { // 아래에서 위로 계산
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.max(dp[j], dp[j + 1]) + triangle[i][j]; 
        }
    }
    return dp[0];
}
