function solution(n) {
    const fibonData=[0,1]
    for(let i=2;i<=n;i++){
        fibonData.push((fibonData[i-1] + fibonData[i-2])%1234567)
    }
    return fibonData[n]
}