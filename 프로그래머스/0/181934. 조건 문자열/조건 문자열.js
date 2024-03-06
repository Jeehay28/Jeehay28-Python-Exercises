function solution(ineq, eq, n, m) {

    const operator = eq === "!" ? ineq : ineq+eq;
    
    switch(operator ) {
        case ">=":
            return n >= m ? 1 : 0;
        case "<=":
            return n <= m ? 1 : 0;
        case ">":
            return n > m ? 1 : 0;
        case "<":
            return n < m ? 1 : 0;
            
    }

}