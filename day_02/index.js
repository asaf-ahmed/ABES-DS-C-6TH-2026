import fs from 'fs';

const writeFileSync =(path, data)=>{
    fs.writeFileSync(path,data);
    console.log("data has written successfully");
}
writeFileSync("./example.txt","this data is written through sync fun:'writerfilesync())'");