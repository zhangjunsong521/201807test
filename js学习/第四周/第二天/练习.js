function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
Fn.prototype.sum();





function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}

var Foo = 13;

Foo();





Foo.getName = function () {    //当做对象
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName();//2    普通函数执行
getName();//4
Foo().getName();//1
getName();//1
var a = new Foo.getName();//2     当做构造函数
//   a  是  把 foo  当做对象时；调取到 他身上的getName   把这个getName  当做构造函数去执行；返回的实例赋给 a
var b = new Foo().getName();//3  new  Foo()  返回的Foo的实例foo  foo.getName                  （不懂）
//先执行new  foo；  返回foo的一个实例，在通过  实例。圪塔name  去找getName  这个属性，然后  把他执行
var c = new new Foo().getName();// 3       （）不懂
// new  Foo()  返回的  Foo的实例 foo       在通过   实例。getName  去找  getName这个数星星；人后把他当做  构造函数去执行
//new  foo（）  返回的   foo的实例
//new  foo.getName（）
//c  是  getName   的  实例







function Fn(){
    var a =1;
    this.a = a
}
Fn.prototype.say = function(){
    this.a = 2
};
Fn.prototype = new Fn;
var f1 = new Fn;

f1.__proto__.b = function (){
    this.a = 3
};
console.log(f1.a);   // 1
console.log(f1.prototype);  // undefined
console.log(f1.b);// f b
console.log(f1.hasOwnProperty('b'));//false
console.log('b' in f1); //   true
console.log(f1.constructor == Fn);  //true
console.log(Fn.prototype);  //   f fn  ???
