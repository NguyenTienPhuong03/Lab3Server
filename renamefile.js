var fs = require('fs');

fs.rename('mssv.txt', 'thongtin.txt',function(err){
    if(err) throw err;
    console.log('FileRename')
})
