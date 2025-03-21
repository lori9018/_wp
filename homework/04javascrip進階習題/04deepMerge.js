/*
實作 deepMerge(obj1, obj2)，將 obj2 合併到 obj1，如果鍵值是物件則遞迴合併。
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
{
  a: 1,
  b: { x: 2, y: 5, z: 6 },
  c: 7
}
*/
function deepMerge(obj1, obj2) {
    let result = { ...obj1 }; // 先複製 obj1，避免修改原物件

    for (let key in obj2) {
        if (obj2[key] !== null && typeof obj2[key] === "object" && !Array.isArray(obj2[key])) {
            // 如果 obj2[key] 是物件（但不是陣列），則遞迴合併，===->嚴格轉換，!Array.isArray(obj2[key])確保不是物件
            result[key] = deepMerge(result[key] || {}, obj2[key]);
        } else {
            // 否則直接覆蓋 obj1 的值
            result[key] = obj2[key];
        }
    }

    return result;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));

/*
註解
key:在物件中每個屬性都有key及他的直(key:value)，在範例中b對應的值是{ x: 2, y: 5, z: 6 }
*/
