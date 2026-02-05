import fs from 'fs';

const writeFileSync =(path, data)=>{
    try{
    fs.writeFileSync(path,data);
    console.log("data has written successfully");
}catch(error){
    console.log("error occured: ");
}
}
writeFileSync("./example.txt","this data is written through sync fun:'writerfilesync())'");

const readFileSync =(path)=>{
    try{
    const data = fs.readFileSync(path,"utf-8");
    console.log(data);
}catch(error){
    console.log("unable to read data");
}   
}
readFileSync("./example.txt");
