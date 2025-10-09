// function solution(genres, plays) {
//     let answer = []
//     const genresObj = {}
//     const playObj = {}
    
//     // 1. 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
//     for(let i=0;i<genres.length;i++){
//         genre = genres[i]
//         play = plays[i]
        
//         if(!(genre in genresObj)){
//             genresObj[genre] = []
//             playObj[genre] = 0
//         }
        
//         genresObj[genre].push([i,play])
//         playObj[genre] +=play
//     }
    
//     // 2. 총 재생 횟수가 많은 장르순으로 정렬
//     sortedGenres = Object.keys(playObj).sort((a,b)=>playObj[b]-playObj[a])
//     // 3. 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
//     for(const genre of sortedGenres){
//         sortedSongs = genresObj[genre].sort((a,b)=>b[1]-a[1]||a[0]-b[0])
//         answer.push(...sortedSongs.slice(0,2).map((song)=>song[0]))
//     }
//     return answer
// }

// function solution(genres, plays) {
//     let result=[]
//     let genCount = {}
//     let genObj = {}
//     for(let i=0;i<genres.length;i++){
//         genCount[genres[i]] = (genCount[genres[i]] ||0) + plays[i]
//     }
//     for(let i=0;i<genres.length;i++){
//         if(genObj[genres[i]] === undefined){
//             genObj[genres[i]] = []
//         }
//         genObj[genres[i]].push([i,plays[i]])
//     }
//     genres = Object.keys(genCount)
//     genres.sort((a,b)=>genCount[b]-genCount[a])
    
//     for(const key in genObj){
//         genObj[key].sort((a,b)=>b[1]-a[1])
//     }
//     for(const key of genres){
//         if(genObj[key].length===1){
//             result.push(genObj[key][0][0])
//         }
//         else{
//             result.push(genObj[key][0][0])
//             result.push(genObj[key][1][0])
//         }
//     }
    
//     return result
// }

function solution(genres, plays) {
    let result=[]
    const genresObj = {}
    const playObj = {}
    
    for(let i=0;i<genres.length;i++){
        if(!(genres[i] in genresObj)){
            genresObj[genres[i]] = []
            playObj[genres[i]] = 0
        }
        genresObj[genres[i]].push([i,plays[i]])
        playObj[genres[i]] += plays[i]
    }
    sortedGenres = Object.keys(playObj).sort((a,b)=>playObj[b]-playObj[a])

    for(const genres in  genresObj){
        
    }
    for(const genres of sortedGenres){
        sortedSong = genresObj[genres].sort((a,b)=>b[1]-a[1]||a[0]-a[0])
        result.push(...sortedSong.slice(0,2).map(v=>v[0]))
    }
    return result
}

