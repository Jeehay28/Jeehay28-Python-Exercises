let input2444 = require("fs").readFileSync(0, "utf8").trim().toString();

const n: number = parseInt(input2444);
const starsMax: number = 2 * n - 1;

let starArr: string = "";

for (let i = 1; i <= starsMax; i += 2) {

    const star= " ".repeat((starsMax - i) / 2) + "*".repeat(i) + "\n";

    starArr += `${star}`


}

for (let i = starsMax - 2; i >= 1; i -= 2) {
    const star = 
    " ".repeat((starsMax - i) / 2) +
    "*".repeat(i)
    + "\n";
    starArr += `${star}`
}

console.log(starArr);
