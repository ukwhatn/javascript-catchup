let nickname = "taro";
console.log(nickname);
nickname = "ichiro";
console.log(nickname);

var str = "webcamp"; // global scope

function foo(){
  console.log(str);
  var str = "dmm webcamp";
  console.log(str);
}

foo();

for (let i = 0; i < 10; i++){
  console.log(i)
}