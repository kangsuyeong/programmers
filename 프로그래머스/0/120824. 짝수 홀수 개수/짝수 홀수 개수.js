function solution(num_list) {
    let even = 0
    let odd =0
    for(const num of num_list  ){
        if (num%2===0)
            even+=1;
        else
            odd+=1;
    }
    
    return [even,odd]
}