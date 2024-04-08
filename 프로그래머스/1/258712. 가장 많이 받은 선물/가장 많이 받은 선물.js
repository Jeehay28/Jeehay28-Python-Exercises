function solution(friends, gifts) {
    
// {
//   muzi: { muzi: 0, ryan: 0, frodo: 2, neo: 0, give: 2, recieve: 5, point: -3},
//   ryan: { muzi: 3, ryan: 0, frodo: 0, neo: 0, give: 3, recieve: 1, point: 2 },
//   frodo: { muzi: 1, ryan: 1, frodo: 0, neo: 0, give: 2, recieve: 2, point: 0 },
//   neo: { muzi: 1, ryan: 0, frodo: 0, neo: 0, give: 1, recieve: 0, point: 1 }
// }
   
    const obj = friends.reduce((acc, curr) =>  {
    
        acc[curr] = 0
        return acc;
    
    }, {});
    
    let newObj = friends.reduce((acc, curr) => {
        
         acc[curr] = {...obj}
        return acc
        
    }, {})
      
    const nestedArr = gifts.map(str => str.split(" "));
    nestedArr.map(([x, y]) => {
        
        newObj[x][y] += 1;
    })
         
    for(any of friends) {
        const giveCnt = Object.values(newObj[any]).reduce((acc, curr) => acc + curr, 0);
        const receiveCnt = friends.reduce((acc, curr) => acc + newObj[curr][any], 0);
      
        newObj[any] = {...newObj[any], 
                      give : giveCnt,
                      receive : receiveCnt, 
                      point : giveCnt - receiveCnt,
                      extra : 0,
                       
                     
                      }
    }
    
    for(first of friends) {
        for (second of friends) {
            if(first !== second) {
                
                if(newObj[first][second] > newObj[second][first]) {
                   newObj[first]['extra'] += 1 
                    
                } else if(newObj[first][second] < newObj[second][first]) {
                    newObj[second]['extra'] += 1
                } else {
                    if (newObj[first]['point'] > newObj[second]['point']) {
                        newObj[first]['extra'] += 1 
                    } else if((newObj[first]['point'] < newObj[second]['point'])) {
                        newObj[second]['extra'] += 1
                    }
                }
                    
            }
            
        }
    }
    
    console.log(Object.values(newObj).map(obj => obj.extra))
    
    return Math.max(...Object.values(newObj).map(obj => obj.extra)) / 2
           
}