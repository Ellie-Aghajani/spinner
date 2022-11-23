process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinnersArr = ["|", "/", "-", "\\", "|"];
let time = 100;
for (const spin of spinnersArr) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, time);
  time += 200;
}