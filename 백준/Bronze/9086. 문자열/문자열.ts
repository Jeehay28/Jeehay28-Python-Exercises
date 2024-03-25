let input9086 = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n");

const arr9086: string[] = input9086.slice(1).map((str: string) => str.trim());

arr9086.forEach((item) => {
  console.log(item[0] + item[item.length - 1]);
});
