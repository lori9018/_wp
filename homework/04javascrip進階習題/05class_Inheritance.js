/*
05class&lnheritance
類別與繼承
定義一個 Animal 類別，具有 name 屬性與 speak() 方法。
建立 Dog 類別，繼承 Animal 並覆寫 speak() 方法，使其回傳 "Woof! I am <name>"。

const dog = new Dog("Buddy");
console.log(dog.speak()); 
"Woof! I am Buddy"
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
    //定義Animal類別有一個屬性(name)屬性(name)

    speak() {
        return `I am ${this.name}`;
    }
    //speak回傳 i am <name>
}

class Dog extends Animal {
    //建立dog類別，用extends繼承Animal的屬性
    constructor(name) {
        super(name);
        //用super初始化name初始化name
    }

    speak() {
    //複寫Animal的speak()
        return `Woof! I am ${this.name}`;
    }
}

const dog = new Dog("Buddy");
//建立dog物件
console.log(dog.speak()); 

/*補充
反引號` ` 讓字串內可以直接使用變數，一般情況字串與變數用＋號　ex: console.log("hello" + name);-->console.log(`Hello, ${name}!`);
變數插值${}-->插入變數或運算式
this指向物件
*/


