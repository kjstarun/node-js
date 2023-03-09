console.log = function () {};
console.warn = function () {};
console.error = function () {};

const demoFunc = () => {
  for (let i = 0; i < 100; i++) {
    console.log("i: ", i);
  }
};

console.log(
  "🚀 ~ file: console-issues.js:9 ~ console.log(demoFunc()):",
  console.log(demoFunc())
);

for (let i = 0; i < 5; i++) {
  console.log("Main Code Loop");
}
