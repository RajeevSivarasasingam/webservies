Promise
// promise is  object form a operation 
// it is mention the status of the operation
// it has 3 states 
//  01.wating/pending
//  02.resolved/isfullfiled -- done
//  03.error


const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file1.txt','utf-8')  // return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})

.catch(()=>{
    console.error(err);
})