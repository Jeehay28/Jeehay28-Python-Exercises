function solution(n) {
  if (n ===0) {
      return 0;
  } else {
      let arr1 = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i ++) {
      if (n % i === 0) {arr1.push(i);}
  } 
  let arr2 = [];
  for (any of arr1) {
       arr2.push(n / any);
  }
  let divisors = [...new Set(arr1.concat(arr2))];
  return divisors.reduce((total, num) => total + num);  
  } 
}