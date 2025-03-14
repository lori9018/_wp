/*遞迴函數
定義一個遞迴函數 factorial(n)，計算 n 的階乘（n!）。
例如 factorial(5) 應該回傳 120。
*/

function factorial(n) {
    let i=1, r=1;
    while (i<=n) {
      r = r*i;
      i = i+1;
    }
    return r;
  }
  
  let num=factorial(5)
  console.log('factorial(5)='+num)