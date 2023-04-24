
// define function to print sentence
const typewriter = function (sentence, delay) {
  // creatime timer variable to keep track of time
  let timer = delay;
  // loop through each character in sentence
  for (const char of sentence) {
  // call setTimeout
  setTimeout(() => {
    // animated print character to console
    process.stdout.write(char);
    // increment timer by x amount each iteration
  }, timer += 75)
}

// call new setTimeout
setTimeout(() => {
  // print new line
  console.log();
  // timer will have accumulated total delay time at this point 
  }, timer);
}

// call typewriter function with sentence and delay time
typewriter("hello there from lighthouse labs", 75)