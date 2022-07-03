// const express = require("express");
const fs = require('fs');
// const bodyParser = require("body-parser");
// const equation_route = require("./routes/equation.route");
// const app = express();
// app.use(express.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// port = 8001;
// app.use(equation_route);
// app.listen(port, () => {
//   console.log(`server is start ${port}`);
// });
const forexe = () => {
  let a;
  let b;
  let c;
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Enter the first number: `, (num1) => {
    a = num1;
    readline.question(`Enter the second number: `, (num2) => {
      b = num2;
      readline.question(`Enter the third number: `, (num3) => {
        c = num3;
        
        equation(a, b, c);
      });
    });
  });
};
const equation=(a, b, c)=>{
  let root1, root2;
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result = `The roots of quadratic equation are ${root1} and ${root2} \r\n`;
    fs.appendFile("/Users/Zeeshan/test.txt", result, (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    result = `The roots of quadratic equation are ${root1} and ${root2} \r\n`;
    fs.appendFile("/Users/Zeeshan/test.txt", result, (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }
}
forexe();
