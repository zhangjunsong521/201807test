/**
 * Created by songsong on 2018/8/7.
 */
/*
* 捕获  获取字符串中  满足正则条件的  字符或字符串
* */
var reg = /\d+/;
var str = '珠峰2018珠峰2019';
reg.test(str);
reg.exec(str);

/*
* ["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]
* 第一项 是整个正则捕获的内容
* 第二项 开始 捕获的是每一分组捕获的内容
* index  捕获的项开始的索引
* input  原始字符串
* */
var reg0 = /\d+/;
var reg1 = /\d+/g;
var str = '珠峰2018珠峰2019';
//两次没有变化
reg0.test(str);
reg0.exec(str);
//有变化
reg1.test(str);
reg1.exec(str);

/*
* 正则捕获的懒惰性：他只捕获字符串中第一个符合规则的部分；即使多次执行，也不会再去后边捕获
* 解决这个问题  我们需要在 正则的后边加上全局修饰符g
* */

/*
* reg1.lastIndex  记录的是下一次查找开始的索引
* 没有全局修饰符  g  时 ；每次都是从索引0  开始查找
* 加上全局  g  时  ； 每次都是从上次查找完毕后结束的索引出开始
* 查不到时，返回null   lastIndex  的值重新赋为 0 ；
* */

/*
* 需求  获取到字符串中所有满足条件的  字符或字符串
* 思路  利用全局修饰符的特性；一直查找，直到返回null   停止查找
* */


var reg5 = /\d+/g;
var str = '珠峰2018珠峰2019';
RegExp.prototype.execAll = function (str) {
    var temp;
    if(!this.global){
        //如果没有全局修饰符
        temp = this.exec(str) || [] ;
        temp.errorReason = '你没有加全局修饰符';
        return temp;
    }
    var ary = [];
    temp = this.exec(str);
    while (temp){
        ary.push(temp[0]);
        temp = this.exec(str);
    }
    return ary ;
};
reg5.execAll(str);