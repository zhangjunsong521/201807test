/**
 * Created by songsong on 2018/8/8.
 */
// var reg = /\d+/g;
var str = "zhufeng2018zhufeng2019";
// str.replace(reg,',');

/*
* replace  支持  正则，可以对整个字符串进行匹配和替换
* */
var reg = /\d+/g;
var str = "zhufeng2018zhufeng2019";
var str2 = str.replace(reg,function () {
    console.log(arguments);
    //arguments
    //第一项  大正则匹配的内容
    //第二项  第一个分组匹配的内容
    return '----'
    //return  的内容  是要替换正则匹配到的部分
});//这个函数体是在每一次要replace时  都先执行一次
console.log(str2);



//把字符串中的数字全部加1
var reg = /\d/g;
var str = "zhufeng2018zhufeng2019";
var str2 = str.replace(reg,function () {
    var temp = arguments[0];
    temp = temp*1 + 1;
    return temp
});
//把 reg 匹配到的str的内容  组合起来  当做实参 传给后边的回调函数；
//用回调函数的返回结果替换  正则匹配到的内容
console.log(str2);


/*
* replace  的结合正则时的用法
* 1、str.replace(reg,'---')  --->  用'---'替换reg匹配到的内容
* 2、str.replace(reg,function(){})  ---> 先把reg匹配的内容组合起来；当做实参传给后边的函数；在用函数的返回结果替换正则匹配到的内容
* */













