console.log("start asynchronous-event-driven");
const fs = require('fs');
fs.readFile("sample.txt", "utf-8", function(err, data){
  if (err) throw err;
  console.log("File Read Successful!!");
  console.log(data);
});
console.log("end asynchronous-event-driven");