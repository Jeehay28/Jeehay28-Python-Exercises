function solution(id_list, report, k) {
    report = [...new Set(report)];
    let reported = report.map(x => x.split(" ")[1]);
    let obj = {};
    for (any of id_list) {
        obj[any] = [];
    }
  
    let s = [...new Set(reported)];
    let blocked = [];
    for (any of s) {
        if (reported.filter(x => x === any).length >= k) {
            blocked.push(any)
        }
    }
       
    for (any of report) {
        let temp = any.split(" ");
        obj[temp[0]] = [...new Set([...obj[temp[0]], temp[1]])]
    }
    
    let keys = Object.keys(obj);

    let result = [];
    for (any of keys) {
        result.push((obj[any]).map(x => blocked.includes(x)).reduce((t, x) => t + x, 0))
    }
    return result;
}