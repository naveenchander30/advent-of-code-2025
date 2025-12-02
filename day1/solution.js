import fs from "fs";

const lines=fs.readFileSync("input.txt", "utf-8").trim().split("\n");
let count=0;
let reading=50;
for(const line of lines){
    const dir=line[0];
    const val=Number(line.slice(1))
    if(dir==="L"){
        reading=((reading-val)%100+100)%100;
    }else if(dir==="R"){
        reading=(reading+val)%100;
    }
    if(reading===0){
        count++;
    }
}
console.log(count);