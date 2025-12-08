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
let clusters = [];
for(let i=0;i<1000;i++){
    const [dist,x,y]=distances[i];
    let foundClusterX=-1;
    let foundClusterY=-1;
    for(let c=0;c<clusters.length;c++){
        if(clusters[c].includes(x)){
            foundClusterX=c;
        }
        if(clusters[c].includes(y)){
            foundClusterY=c;
        }
    }
    if(foundClusterX==-1 && foundClusterY==-1){
        clusters.push([x,y]);
    } else if(foundClusterX!=-1 && foundClusterY==-1){
        clusters[foundClusterX].push(y);
    } else if(foundClusterX==-1 && foundClusterY!=-1){
        clusters[foundClusterY].push(x);
    } else if(foundClusterX!=foundClusterY){
        clusters[foundClusterX]=clusters[foundClusterX].concat(clusters[foundClusterY]);
        clusters.splice(foundClusterY,1);
    }
}
clusters.sort((a,b)=>b.length - a.length);
let product=clusters[0].length * clusters[1].length * clusters[2].length;
console.log(product);