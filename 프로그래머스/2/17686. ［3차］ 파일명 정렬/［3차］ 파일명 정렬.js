function splitFile(file){
    let head = ''
    let number = ''
    
    let index = 0
    
    // head 계산하기 -> 숫자가 나올때까지 계산
    while(index < file.length && isNaN(parseInt(file[index]))){
        head+=file[index]
        index++
    }
    // number 계산하기 -> 문자가 나올때까지 계산
    while(index < file.length && number.length<5  && !isNaN(parseInt(file[index]))){
        number+=file[index]
        index++
    }
    
    return [head,number]
}

function solution(files) {
     return files.sort((a,b)=>{
         const [headA,numberA] = splitFile(a)
         const [headB,numberB] = splitFile(b)
         
         const headComp = headA.toLowerCase().localeCompare(headB.toLowerCase())
         if(headComp!==0) return headComp
         
         return Number(numberA) - Number(numberB)
     })
}