function solution(s){
    if(s.length%2!==0) return false
    
    const stack = []
    
    for(const string of s){
        if(string==='('){
            stack.push(string)
        }
        else{
            if(stack.length===0) return false
            stack.pop()
        }
    }
    
    if(stack.length>0) return false
    
    return true
}