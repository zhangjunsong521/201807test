/**
 * Created by songsong on 2018/8/8.
 */

/*
* match  属于字符串中的方法
* */

var reg = /\d+/;
var str = "珠峰2018珠峰2019";
console.log(str.match(reg));
console.log(reg.exec(str));
/*
* 当正则上边不加   全局修饰符G时  march  方法和  exec 的返回结果是一样的
* */



var reg2 = /\d+/g;
var str2 = "珠峰2018珠峰2019";
console.log(str2.match(reg2));
console.log(reg2.exec(str2));
/*
* 当正则加上  全局修饰符G时   match方法会把字符串中所有符合大正则的内容捕获到
* */


var reg3 = /(\d+)([a-z]+)/g;
var str3 = "zhufeng2018zhufeng2019";
console.log(str3.match(reg3));
//有g 这个修饰符时；match  只能捕获到大正则捕获的内容

console.log(reg3.exec(str3));
//第一项  是大正则捕获到的内容
//第二项  是第一个小分组捕获到的内容
//第三项  是第二个小分组捕获到的内容













































