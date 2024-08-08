function solution(genres, plays) {
  const allGenres = [...new Set(genres)];

  let data = {};

  for (any of allGenres) {
    let temp = genres
      .map((genre, index) => {
        if (any === genre) {
          return [plays[index], index];
        } else {
          return "NA";
        }
      })
      .filter((el) => el !== "NA");

    temp.sort((x, y) => y[0] - x[0]);

    const sum = temp.reduce((acc, cur) => acc + cur[0], 0);

    data[any] = [temp, sum];
  }

  let popOrder = [];
  for (any of allGenres) {
    popOrder.push([any, data[any][1]]);
  }

  popOrder = popOrder.sort((x, y) => y[1] - x[1]).map((arr) => arr[0]);

  let answer = [];
    
  for (any of popOrder) {
      answer.push(data[any][0][0][1]);
      if(data[any][0].length >=2) {
          answer.push(data[any][0][1][1]);
          } 
    
  } 

  return answer;
}
