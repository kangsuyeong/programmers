function solution(n) {
    return n.toString().split("").reduce((a,b)=>a+Number(b),0)
}