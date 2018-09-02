/**
 * Created by songsong on 2018/8/4.
 */
var name = '中国',age = 5000;
function Person() {
    getName = function () {
        console.log(this.name)
    };
    this.name = 'zfpx';
    this.age = 9;

}
Person.name = '珠峰';
Person.getName = function () {
    console.log(this.name);
};
Person.prototype.getName = function () {
    console.log(this.name);
};
var obj = {name:'培训',f:Person};
var per = new Person();
per.getName = function(){
    console.log(12)
};
var per2 = new Person();
obj.f();//
Person();//
per.getName();
per2.getName();





function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);}; // 当作对象
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}

Foo.getName();//2
getName();//4
Foo().getName();//1
getName();//1
var a = new Foo.getName();//2
var b = new Foo().getName();//3
var c = new new Foo().getName();//3
