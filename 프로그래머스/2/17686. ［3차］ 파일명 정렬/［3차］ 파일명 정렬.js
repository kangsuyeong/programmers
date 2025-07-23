function splitFile(file){
    let head=''
    let number = ''
    let i=0
    
    // 문자열만
    while(i<file.length && isNaN(parseInt(file[i]))){
        head+=file[i]
        i++
    }
    
    // 숫자만
    while(i<file.length && number.length<5 && !isNaN(parseInt(file[i]))){
        number+=file[i]
        i++
    }
    
    const tail = file.slice(i)
    
    return [head,number,tail]
}

function solution(files) {
    return files.sort((a,b)=>{
        const [headA,numA] = splitFile(a)
        const [headB,numB] = splitFile(b)
        
        const headComp = headA.toLowerCase().localeCompare(headB.toLowerCase())
        if(headComp!==0) return headComp
        
        return Number(numA) - Number(numB)
    })
}