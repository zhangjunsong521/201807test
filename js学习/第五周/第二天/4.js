/**
 * Created by songsong on 2018/8/8.
 */

/*
* 需求： 根据身份证号：展示出这个人的基本信息
* 这个人XX年XX月XX日出生的；性别XX；
* */
var str = "230303199210265410";
var per = /\d{6}(\d{4})(\d{2})(\d{2})\d{2}(\d)[\dX]/;
var ary = str.match(per);
var str2 = `这个人是${ary[1]}年${ary[2]}月${ary[3]}日出生的，性别${ary[4]%2 == 0 ? '女爱好男':'男爱好女'}`;
console.log(str2);

/*
* 通过正则  把 下边的字符串转化成对应的汉子的年月日时间
* */
var str1 = "2018/08/08 12:24:34";
var per1 = /[/:\s]/g;
var ary1 = str1.split(per1);
var per2 = `今天是${ary1[0]}年${ary1[1]*1}月${ary1[2]*1}日 中午${ary1[3]}点${ary1[4]}分${ary1[5]}秒`;
console.log(per2);


var str1 = "2018/08/08 12:24:34";
var per3 = /\d+/g;
var ary3 = str1.match(per3);
var per3_1 = `今天是${ary3[0]}年${ary3[1]*1}月${ary3[2]*1}日 中午${ary3[3]}点${ary3[4]}分${ary3[5]}秒`;
console.log(per3_1);


var str1 = "2018/08/08 12:24:34";
var per4 = /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
var per4_1 = str1.replace(per4,function (...ary) {
    return `今天是${ary[1]}年${ary[2]*1}月${ary[3]*1}日 中午${ary[4]}点${ary[5]}分${ary[6]}秒`;
});
console.log(per4_1);