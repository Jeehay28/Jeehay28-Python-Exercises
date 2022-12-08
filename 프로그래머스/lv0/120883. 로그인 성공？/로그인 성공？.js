function solution(id_pw, db) {
   let msg = "";
   for (any of db){
       msg = ""
       let arr = [id_pw[0].toLowerCase() === any[0], id_pw[1] === any[1]];
       if (arr[0] === true){
           arr[1] === true ? msg = "login" : msg = "wrong pw";
           break;
       } else {
           msg = "fail";
       }
   }
    return msg;
}