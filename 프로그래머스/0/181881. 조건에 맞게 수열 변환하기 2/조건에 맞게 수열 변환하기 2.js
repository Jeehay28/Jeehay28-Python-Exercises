const solution = (arr) => {

    let arrPrev = [...arr];
    let arrNext = operateArray(arrPrev);
    let count = 0;
    
    while(!compareArrays(arrPrev, arrNext)) {
        arrPrev = arrNext;
        arrNext = operateArray(arrNext);
        count += 1;       
          
    }
  
    return count;
        
}

const operateArray = (arr) => {
        return arr.map(item => {
        if (item >= 50 && item % 2 === 0) {
            return item / 2;
        } else if(item < 50 && item % 2 === 1) {
            return item * 2 + 1;
        } else {
            return item;
        }
    });
    }
    
    
    const compareArrays = (arr1, arr2) => {
        
        for(let i=0; i<arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }
        }
        
        return true;
    };


