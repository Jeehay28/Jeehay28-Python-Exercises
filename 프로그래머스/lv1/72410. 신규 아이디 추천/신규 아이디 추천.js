function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();
    console.log("1단계", new_id)
    // 2단계
    // let re = new RegExp("(\w)|([.-])", "g")
    new_id = new_id.match(/(\w)|([.-])/g).join("");
    console.log("2단계", new_id)
    // 3단계
    while(new_id.includes("..")) {
        new_id = new_id.replaceAll("..", ".");
    }
    console.log("3단계", new_id)
    // 4단계
    new_id = new_id.startsWith(".") ? new_id.slice(1) : new_id;
    new_id = new_id.endsWith(".") ? new_id.slice(0, new_id.length-1) : new_id;
    console.log("4단계", new_id)
    // 5단계
    if (new_id === "") {
        new_id = "a"
    }
    console.log("5단계", new_id)
    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
        new_id = new_id.endsWith(".") ? new_id.slice(0, 14) : new_id;
    }
    console.log("6단계", new_id)
    // 7단계
    if (new_id.length <= 2) {
        let len = 3 - new_id.length;
        new_id = new_id + (new_id[new_id.length-1]).repeat(len);
    }
    console.log("7단계", new_id)
    return new_id;
}