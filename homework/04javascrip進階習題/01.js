/*實作 countLetters(str)，輸入一個字串，回傳一個 Map，其鍵為字母，值為該字母出現的次數。
console.log(countLetters("banana")); 
// Map { 'b' => 1, 'a' => 3, 'n' => 2 }
*/

function countLetters(str) {
    let letterMap = new Map(); 

    for (let char of str) { 
        //let char of str是遍歷字串，取得每個字
        if (letterMap.has(char)) {
            //用has回傳ture_or_false
            letterMap.set(char, letterMap.get(char) + 1); 
            //set更新值,get回傳他的數字
        } else {
            letterMap.set(char, 1); 
            //如果不重複會先將對應字母set為1
        }
    }
    /*
    所以整個程式=遍歷banana -->has先檢查b，因為沒有b所以跑else-->b set為1
    a同上-->n同上-->a出現第二次-->跑入if-->has依此類推 
    */
    return letterMap;
}

console.log(countLetters("banana")); 






