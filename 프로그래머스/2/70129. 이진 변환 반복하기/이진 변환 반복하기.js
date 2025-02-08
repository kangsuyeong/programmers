function solution(s) {
    let total_count =0
    let zero_count =0
    while(s!=='1'){
        let s_length = s.length
        let one = s.split('').filter(i=>i==='1')
        zero_count += s_length-one.length
        s= (one.length).toString(2)
        total_count++
    }

    return [total_count,zero_count]
}

















function solution(s){
    let currentString = s
    let count=0
    let zero_count=0
    while(currentString!=='1'){
        const currentLength = currentString.length
        const nextString = currentString.split('0').join('')
        const nextStringLength = nextString.length
        zero_count+=currentLength-nextStringLength
        
        currentString=nextStringLength.toString(2)
        count+=1
    }
    return [count,zero_count]
}
