function solution(cacheSize, cities) {
    let cacheArr = [];
    let runTime = 0;
    cities = cities.map(x => x.toLowerCase());
    for (any of cities) {
        if (cacheArr.includes(any)) {
            runTime += 1; 
            cacheArr.splice(cacheArr.indexOf(any), 1);
            cacheArr.push(any);
        } else {
            runTime += 5;
            cacheArr.push(any);
            if (cacheArr.length > cacheSize) {
                cacheArr.shift();
            }
        }       
}
    return runTime;
}
