function solution(s) {
    let current_str = s // 현재 문자열
    let count = 0 // 이진 변환의 횟수
    let zero_count = 0 // 제거된 0의 개수

    while(current_str!=='1'){
        const current_str_length = current_str.length // 현재 문자열의 길이
        const next_str = current_str.split('0').join('') // 0 제거
        const next_str_length = next_str.length // 0제거후 문자열의 길이
        zero_count += current_str_length - next_str_length // 제거 된 0의 개수 추가
        
        current_str = next_str_length.toString(2) // 현재 문자열 없데이트
        
        count+=1 // 이진변환의 횟수
        
    }
    
    return [count,zero_count]
}