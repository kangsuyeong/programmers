function solution(numbers) {
    const cur_num = numbers.reduce((acc,cur)=>acc+cur,0)
    let total_num = 0
    for(let i=1;i<=9;i++){
        total_num+=i
    }
    return total_num-cur_num
}