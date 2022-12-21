function solution(survey, choices) {
    let obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    for (let i = 0; i < survey.length; i++) {
        switch (choices[i]) {
            case 1:
                console.log(survey[i][0]);
                obj[survey[i][0]] += 3;
                break;
            case 2:
                obj[survey[i][0]] += 2;
                break;
            case 3:
                obj[survey[i][0]] += 1;
                break;
            case 4:
                obj[survey[i][0]] += 0;
                obj[survey[i][1]] += 0;
                break;
            case 5:
                obj[survey[i][1]] += 1;
                break;
            case 6:
                obj[survey[i][1]] += 2;
                break;
            case 7:
                obj[survey[i][1]] += 3;
                break;
        }
    }
    
    let str = "";
    let types = ["R", "T", "C", "F", "J", "M", "A", "N"];
    for (let i=0; i<types.length-1; i+=2) {
        str += obj[types[i]] >= obj[types[i+1]] ? types[i] : types[i+1];
    }
    console.log(obj)
    return str;
}