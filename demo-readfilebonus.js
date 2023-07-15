var fs = require('fs');
var data = "\n Trương Thu Huyền ";
fs.appendFileSync('mssv.txt', data,'utf8');
console.log('Data is Appended to file success');
