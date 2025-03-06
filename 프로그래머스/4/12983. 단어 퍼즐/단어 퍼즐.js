function solution(strs, t) {
    const n = t.length;
    let dp = Array(n + 1).fill(Infinity);
    const set = new Set(strs);
    const maxLen = Math.max(...strs.map(word => word.length)); // 🔥 가장 긴 단어 길이 찾기

    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = Math.max(0, i - maxLen); j < i; j++) { // 🔥 불필요한 j 탐색 줄이기
            const currentString = t.substring(j, i);
            if (set.has(currentString)) {
                dp[i] = Math.min(dp[j] + 1, dp[i]);
            }
        }
    }

    return dp[n] === Infinity ? -1 : dp[n];
}
