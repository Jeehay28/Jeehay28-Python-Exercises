function solution(s) {
    let cnt = 0;
    let x = s[0];
    
    let yesCnt = 0
    let noCnt = 0
    
    s.split("").map((item, i) => {
        
        item === x ? yesCnt += 1 : noCnt += 1;
        
        if(yesCnt === noCnt) {
            cnt +=1;
            yesCnt = 0;
            noCnt = 0;
            x= s[i+1];
        } 
 
    })
    
    return yesCnt !== noCnt ? cnt + 1: cnt;
}