function solution(triangle) {
  const n = triangle.length
  let dp = [...triangle[n-1]]
  
  for(let i=n-2;i>=0;i--){
      for(let j=0;j<=i;j++){
          dp[j] = Math.max(dp[j],dp[j+1]) + triangle[i][j]
      }
  }
    return dp[0]
}

// function solution(triangle) {
//     const n = triangle.length;
//     let dp = [...triangle[n - 1]]; // 마지막 행을 초기 dp로 사용

//     for (let i = n - 2; i >= 0; i--) { // 아래에서 위로 계산
//         for (let j = 0; j <= i; j++) {
//             dp[j] = Math.max(dp[j], dp[j + 1]) + triangle[i][j]; 
//         }
//     }
//     return dp[0];
// }

// function solution(triangle) {
//   const n = triangle.length
//   // let dp = [...triangle[n-1]]
  
//   let dp = Array(n).fill(0)
//   dp[0] = triangle[0]
  
//   for(let i=1;i<n;i++){
//       for(let j=0;j<=i;j++){
//           if(j===0){
//               dp[j] = dp[j]+
//           }
//           dp[j] = Math.max(dp[j],dp[j+1]) + triangle[i][j]
//       }
//   }
//     return dp[0]
// }

function solution(triangle) {
  const n = triangle.length;
  let dp = [...triangle[0]]; // 첫 번째 행을 dp로 초기화

  for (let i = 1; i < n; i++) {
    for (let j = i; j >= 0; j--) { // **뒤에서 앞으로 갱신**
      if (j === 0) {
        dp[j] += triangle[i][j]; // 왼쪽에서 내려오는 경우
      } else if (j === i) {
        dp[j] = dp[j - 1] + triangle[i][j]; // 오른쪽에서 내려오는 경우
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j]) + triangle[i][j]; // 두 경로 중 최댓값 선택
      }
    }
  }

  return Math.max(...dp);
}

