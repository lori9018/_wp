/*
物件遍歷

建立一個物件 scores = { Alice: 85, Bob: 92, Charlie: 78 }。
使用 for...in 迴圈遍歷 scores 物件，輸出 "Alice 的分數是 85" 這樣的資訊。
*/

let scores = { Alice: 85, Bob: 92, Charlie:78}
let text="";
for(let x in scores.Alice){
    text+= scores[x];
    console.log("Alice 的分數是",(text));
}

/*gpt's version
let scores = { Alice: 85, Bob: 92, Charlie: 78 };

for (let name in scores) {  // 遍歷物件的屬性
    console.log(`${name} 的分數是 ${scores[name]}`);
}
*/

