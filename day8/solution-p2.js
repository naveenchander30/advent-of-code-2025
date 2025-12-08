import fs from "fs";

const points = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").trim().split("\n").map(line=>line.split(",").map(num=>parseInt(num)));
let distances = [];
for (let i = 0; i < points.length; i++) {
    for (let j = i+1; j < points.length; j++) {
        const [x1,y1,z1] = points[i];
        const [x2,y2,z2] = points[j];
        let dist=Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2);
        distances.push([dist,i,j]);
    }
}
distances.sort((a,b)=>a[0]-b[0]);
const parent = new Array(points.length).fill(0).map((_,i)=>i);
let numClusters= points.length;

function find(i){
    if(parent[i]===i) return i;
    parent[i]=find(parent[i]);
    return parent[i];
}

function union(i,j){
    const rootI=find(i);
    const rootJ=find(j);
    if(rootI!==rootJ){
        parent[rootJ]=rootI;
        numClusters--;
    }
}

for(let k=0;k<distances.length;k++){
    const [dist,x,y]=distances[k];
    union(x,y);
    if(numClusters===1){
        console.log(points[x][0]*points[y][0]);
        break;
    }
}