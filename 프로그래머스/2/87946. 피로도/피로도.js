function solution(k, dungeons) {
    
   let resultCnt = [];
    
    const counting = (l, arr) => {
        let cnt = 0;
        for (let i =0; i<arr.length; i++) {
            if(l >= arr[i][0]) {
                l-=arr[i][1];
                cnt += 1;
            } else {
                break;
            }
        }
        return cnt;
    }
            
    function modifyArr(tempArr, remaining) {
        if(remaining.length === 0) {
            resultCnt.push(counting(k, tempArr))
        }
        
        for(let i=0; i<remaining.length; i++) {
            const newArr = [...tempArr, remaining[i]]
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i+1)];
            
            modifyArr(newArr, newRemaining)
            
        }
        
    }
    
    modifyArr([], dungeons);
    
   return Math.max(...resultCnt)
   
}

