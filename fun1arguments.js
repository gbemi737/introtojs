var coolness;

function grade(coolness){
  if (coolness == 100){
    return "omg purr you are so cool";
  }else if (coolness >= 50) {
    return "meh, you cool i guess";
  }else if (coolness < 55 ) {
    return "sorry babe, you needa glow up";
  }else {
    return "nope not even close";
  }
}
console.log(test(83));

// testing conditions
// console.log(test(100));
// console.log(test(50));
// console.log(test(75));
// console.log(test(15));
// console.log(test("idk"));
