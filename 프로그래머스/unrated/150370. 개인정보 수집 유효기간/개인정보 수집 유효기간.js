function solution(today, terms, privacies) {
    let obj_terms = {}
    terms.map(x => x.split(" ")).forEach(el => {
        obj_terms[el[0]] = el[1]
    })
    let due = new Date(today);
    let dates = []
    privacies.map(x => x.split(" ")).forEach(el => {
        let temp = new Date(el[0]);
        [year, month, day] = [0, 0, 0]
        // year
        year = temp.getFullYear() + Math.floor(obj_terms[el[1]] / 12);
        // month
        month = temp.getMonth() + 1 + Math.floor(obj_terms[el[1]] % 12);
        if (month > 12) {
            year += Math.floor(month / 12);
            month = Math.floor(month % 12);
        }
        // day
        if (temp.getDate() === 1) {
            day = 28;
            month -= 1;
        } else {
            day = temp.getDate() - 1;
        }
        dates.push(new Date(`${year}.${month}.${day}`));
    });
    let result = [];
    dates.forEach((date, index) => {
        if (date < due) result.push(index + 1) 
    })
    return result;
    }                                       