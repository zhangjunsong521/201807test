/**
 * Created by songsong on 2018/8/7.
 */
var reg = /\d/;
var str = '珠峰2018珠峰2019';
reg.test(str);//true


var reg2 = /^\d/;
//在这里 ^ 表示以什么开头  在 [^] 中的 ^ 代表取非
var str2 = '珠峰2018珠峰2019';
var str2_1 = '2017珠峰2018珠峰2019';
reg2.test(str2);//false
reg2.test(str2_1);//true


var reg3 = /^\d{4}/;//匹配 以4个数字开头的字符串
var str3 = '2017珠峰';
var str3_1 = '20珠峰';
reg3.test(str3);//true
reg3.test(str3_1);//false

var reg4 = /\d+$/;
var reg5 = /\d$/;
var reg6 = /\d{2}$/;
var str4 = '2017珠峰';
var str4_1 = '2017珠峰2018';
var str4_2 = '2017珠峰2';
reg4.test(str4);//false
reg4.test(str4_1);//true
reg4.test(str4_2);//true

reg5.test(str4);//false
reg5.test(str4_1);//true
reg5.test(str4_2);//true

reg6.test(str4);//false
reg6.test(str4_1);//true
reg6.test(str4_2);//false

var reg7 = /\d/;
var reg7_1 = /^\d$/;
var str5 = '2017珠峰';
var str5_1 = '2017珠峰2018';
reg7.test(str5);//true
reg7_1.test(str5);//false
reg7_1.test(str5_1);//true

var reg8 = /^(18|19)$/;//代表18 或 19
//   /^18$/  /^19$/

/*
* 分组的作用：
* 1.提升优先级
* 2.分组的匹配   可以理解成大正则里面的小正则
* 3.分组捕获
* */





