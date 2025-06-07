/*
實作 class Vector {...}
let a = new Vector([1,2,3])
let b = new Vector([4,5,6])

console.log(a.add(b).sub(b).dot(b))

*/


class Vector {
    constructor(components) {
      if (!Array.isArray(components)) {
        throw new Error('Components must be an array');
      }
      this.components = components;
    }
  
    add(other) {
      /*if (this.components.length !== other.components.length) {
        throw new Error('Vectors must be of the same dimension');
      }*/
      const result = this.components.map((val, idx) => val + other.components[idx]);
      return new Vector(result);
    }
  
   
    sub(other) {
      /*if (this.components.length !== other.components.length) {
        throw new Error('Vectors must be of the same dimension');
      }*/
      const result = this.components.map((val, idx) => val - other.components[idx]);
      return new Vector(result);
    }
  
    
    dot(other) {
      /*if (this.components.length !== other.components.length) {
        throw new Error('Vectors must be of the same dimension');
      }*/
      return this.components.reduce((sum, val, idx) => sum + val * other.components[idx], 0);
    }
    toString() {
      return `Vector [${this.components.join(', ')}]`;
    }
  }
  

  let a = new Vector([1,2,3]);
  let b = new Vector([4,5,6]);
  

  console.log(a.add(b).components);
  console.log(a.sub(b).components);
  console.log(a.dot(b));

  //還增加了錯誤訊息的使用

  //AI網址 https://www.perplexity.ai/search/qing-bang-wo-yong-javascriptwa-BprsJEhcQqKTeSCpmvY6wQ#1