/*
陣列去重並排序
實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。
console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
// [1, 3, 5, 8]
*/

function uniqueSorted(arr){
    return[...new Set(arr)].sort((a,b) => a - b);
}
/*
Set-->javascrip的資料結構，去除重複元素(Set是一個工具，大小寫不能錯)
[...new Set(arr)]-->將Set轉回陣列
.sort((a,b) => a-b)讓數字大到小排列
*/
console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]));
