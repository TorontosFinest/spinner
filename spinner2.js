const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 200;
for (let i = 0; i < spinner.length; i++) {
  if (i === "\\") {
    setTimeout(() => {
      process.stdout.write(`\r${spinner[i]}\n`);
    }, delay * i + 300);
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${spinner[i]}   `);
    }, delay * i + 300);
  }
}
