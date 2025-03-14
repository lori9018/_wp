/*陣列過濾

建立一個陣列 nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]。
過濾出所有的偶數，並輸出新的陣列。
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("before filte",(nums));
let newnums = nums.filter(num => num % 2 === 1);
console.log("after filte",(newnums));

/*迴圈 let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Numbers = [];  

for (let i = 0; i < numss.length; i++) {
    if (nums[i] % 2 ===1) {  
        Numbers.push(numss[i]); 
    }
}

console.log(Numbers); 
*/
