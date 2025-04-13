function solution(rsp) {
    let result=""
    rsp = rsp.split("")
    for(const s of rsp){
        if(s==="2"){
            result+=0
        }
        else if(s==="0"){
            result+=5
        }
        else{
            result+= 2
        }
    }
    return result
}