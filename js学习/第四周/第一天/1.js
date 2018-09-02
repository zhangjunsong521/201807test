/**
 * Created by songsong on 2018/7/31.
 */
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
console.log(f1.getX === f2.getX); //  false
console.log(f1.getY === f2.getY); //  true
console.log(f1.__proto__.getY === Fn.prototype.getY);  //true
console.log(f1.__proto__.getX === f2.getX);  //false
console.log(f1.getX === Fn.prototype.getX);  //false
console.log(f1.constructor);  // object   自己身上没有；往所属类的原型上查找  这个原型是被手动修改过的新原型地址  这个新地址上么有constructor属性，则继续向新原型所属类的原型（object。prototype）上查找；这时，object。prototype上有这个属性  指向  object  类
console.log(Fn.prototype.__proto__.constructor);// object
f1.getX();//100
f1.__proto__.getX();//undefined
f2.getY();//200
Fn.prototype.getY();//400
f1.sum();//300
Fn.prototype.sum();//  NaN
