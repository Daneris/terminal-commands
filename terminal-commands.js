const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err,files) => {
    const filesToString = files.reduce((acc,file) => {
      return `${acc} ${file}`
    }, '');
    console.log(filesToString);
  })
};


module.exports.mkdir = () => {
   fs.mkdir('/tmp/test',function(err){
       if (err) {
           return console.error(err);
       }
   console.log("Directory created successfully!");
   });
 };
 
module.exports.touch = () => {
  fs.writeFile('file.txt','This is a new file',(err) =>{
    if (err) throw err;
    console.log('The file has been saved')
  })
};
