function solution(k, tangerine) {
    tangerine.sort((a,b)=>a-b)
    const frequency = {}
    let count=0
    for(const t of tangerine){
        frequency[t] = (frequency[t]||0) + 1
    }
    
    const frequency_array = Object.entries(frequency).sort((a,b)=>b[1]-a[1])

    for(let i=0;i<frequency_array.length;i++){
        count+=frequency_array[i][1]
        if(count>=k) return i+1
    }
}