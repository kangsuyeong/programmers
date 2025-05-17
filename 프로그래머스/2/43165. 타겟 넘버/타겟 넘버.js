function solution(numbers, target) {
    let count = 0
    
    function dfs(index,cur_num){
        if(index===numbers.length){
            if(cur_num===target){
                count+=1
            }
            return
        }
        
        dfs(index+1,cur_num+numbers[index])
        dfs(index+1,cur_num-numbers[index])
    }
    
    dfs(0,0)
    return count
}