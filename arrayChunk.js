let array = ["abc","abc","abc","abc"];
let arrayChunk = [];


let i,j, temporary, chunk = 2;
for (i = 0,j = array.length; i < j; i += chunk) {
    temporary = array.slice(i, i + chunk);
    arrayChunk.push(temporary);
    // do whatever
}

for(index of arrayChunk){
    console.log({"keywords":index,"status":"pending"})
}
