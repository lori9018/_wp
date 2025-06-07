/*實作 filterArray(arr, predicate)，回傳符合條件的陣列。
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
// [2, 4]
*/

function filterArray(arr, predicate) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        //透過for迴圈遍歷陣列
      if (predicate(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 

  //https://www.perplexity.ai/search/qing-bang-wo-yong-javascriptwa-H7fZ45BTTnayNeoT4l9QLA#0