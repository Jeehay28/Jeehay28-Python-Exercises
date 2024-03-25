let input27866 = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n");

  const str: string = input27866[0];
  const loc: number = parseInt(input27866[1]);

  console.log(str[loc-1]);