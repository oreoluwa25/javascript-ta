// complete the function
function prime (num) {
  // code goes here
  if(num < 2){
    return `${num} is not a prime number`; 
  }
  for(i=2; i < num; i++){
    if(num%i === 0){
      return `${num} is not a prime number`;
    }else{
      `${num} is a prime number`;
    }
  }
}
console.log(prime(17));

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
