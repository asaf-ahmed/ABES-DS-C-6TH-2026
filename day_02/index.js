import fs, { appendFileSync } from 'fs';

const writeFileSync =(path, data)=>{
    try{
    fs.writeFileSync(path,data);
    console.log("data has written successfully");
}catch(error){
    console.log("error occured: ");
}
}
writeFileSync("./example.txt","this data is written through sync fun:'writerfilesync()'");

const readFileSync =(path)=>{
    try{
    const data = fs.readFileSync(path,"utf-8");
    console.log(data);
}catch(error){
    console.log("unable to read data");
}   
}
readFileSync("./example.txt");

const append =(path, data)=>{
    try{
    fs.appendFileSync(path,data);
    console.log("data has been changed successfully");
}catch(error){
    console.log("error occured: ");
}
}

console.log("Before Write:");
writeFileSync(".example.txt","this data is written through sync fun:'writerfilesync())'");
console.log("After Write:");


console.log("Before read:");
readFileSync("./example.txt");
console.log("After read:");


console.log("Before append:");
appendFileSync("./example.txt","this data is appended through sync fun:'appendfilesync()'");
console.log("After append:");




