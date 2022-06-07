const sentence = "hello there from India";

let delay = 0;
for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}
setTimeout(() => {
  console.log("");
}, delay);