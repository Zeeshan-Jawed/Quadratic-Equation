const fs = require('fs');

const run = async(req,res) => {
    
  let root1, root2;
  const {a,b,c}=req.body
  if(!a||!b||!c){
    res.send("Some Filed is Missing")
  }
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result=`The roots of quadratic equation are ${root1} and ${root2} \r\n`
    fs.appendFile('/Users/Zeeshan/test.txt', result, err => {
        if (err) {
          console.error(err);
        }
      });
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    res.send("Result save in file")
  }
  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }
};

module.exports =run
