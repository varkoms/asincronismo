function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback){
  return callback(num1, num2);
}

console.log(calc(20, 20, sum)); // 40

setTimeout(function(){
  console.log(`Hola Javascript`);
}, 5000);

function gretting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(gretting, 5000, 'Cesar');