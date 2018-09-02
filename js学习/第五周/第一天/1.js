/**
 * Created by songsong on 2018/8/7.
 */
var reg = /w/;//要检测的字符串中含有w的字符
var reg2 = /\w/;
console.dir(reg);

var str = 'http://www.zhufeng.com';
console.log(reg.test(str));// true

var reg3 = /\d/;
var str3 = '2018珠峰2019珠峰';
reg3.test(str3);//true

var reg4 = /\d+/; //检测字符串中有没有数字  数字出现的次数是1到多次
var str4_1 = '2018珠峰2019珠峰';
var str4_2 = '2珠峰珠峰';
var str4_3 = '珠峰珠峰';
reg4.test(str4_1);//true
reg4.test(str4_2);//true
reg4.test(str4_3);//false

var reg5 = /\d?/;//检测字符串中有没有出现数字  次数 0 到 1 次
var str5_1 = '2018珠峰2019珠峰';
var str5_2 = '2珠峰珠峰';
var str5_3 = '珠峰珠峰';
var str5_4 = '';
var str5_5 = {};
reg5.test(str5_1);//true
reg5.test(str5_2);//true
reg5.test(str5_3);//true
reg5.test(str5_4);//true
reg5.test(str5_5);//true

var reg6 = /\d*/;//检测字符串中有没有出现数字  次数 0 到 多次
var str6_1 = '2018珠峰2019珠峰';
var str6_2 = '2珠峰珠峰';
var str6_3 = '珠峰珠峰';
reg6.test(str6_1);//true
reg6.test(str6_2);//true
reg6.test(str6_3);//true

var reg7 = /\d{2}/;//检测字符串中有没有连着的两个数字
var str7_1 = '2018珠峰2019珠峰';
var str7_2 = '2珠峰珠峰';
var str7_3 = '珠峰珠峰';
var str7_4 = '珠2峰珠3峰';
reg7.test(str7_1);//true
reg7.test(str7_2);//false
reg7.test(str7_3);//false
reg7.test(str7_4);//false