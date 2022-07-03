const express = require("express");
const http = require('node:http');
const bodyParser = require("body-parser");
const equation_route = require("./routes/equation.route");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
port = 8001;
app.use(equation_route);
app.listen (port, () => {
  console.log(`server is start ${port}`);
   hitapp()
});

function hitapp(){
  const options = {
    hostname: 'localhost',
    port: 8001,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  
  const  req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
   readline.question(`Enter the first number: `, (num1) => {
   let a = num1;
    readline.question(`Enter the second number: `, (num2) => {
      let b = num2;
      readline.question(`Enter the third number: `, (num3) => {
       let  c = num3;
        const postData = JSON.stringify({
          'a': a,
          'b':b,
          'c':c
        });
        req.write(postData);
        req.end();
      });
    });
  });
}

