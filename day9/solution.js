import fs from "fs";

const points = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").trim().split("\n").map(line=>line.split(",").map(num=>parseInt(num)));
let distances = [];
for (let i = 0; i < points.length; i++) {
    for (let j = i+1; j < points.length; j++) {
        const [x1,y1] = points[i];
        const [x2,y2] = points[j];
        let dist=Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        let length = Math.abs(x2 - x1);
        distances.push([dist,length]);
    }
}
distances.sort((a,b)=>(b[1]+1)*(Math.sqrt(b[0]**2 - b[1]**2)+1) - (a[1]+1)*(Math.sqrt(a[0]**2 - a[1]**2)+1));
const biggestArea = distances[0];
console.log((biggestArea[1]+1) * (Math.sqrt(biggestArea[0]**2 - biggestArea[1]**2)+1));