/**
 * Created by songsong on 2018/8/7.
 */
/*
* 匹配  18 - 65 的年龄段
* */
var num = 19;
var reg = /^(1|2)\d$/;
reg.test(num);

var reg2 = /^((18|19|17)|([2-5]\d)|(6[0-5]))$/;

// 有效数字
    var reg3 = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
// 手机号码
    var reg5 = /^1(\d{10})/;
// 匹配邮箱(qq或126或163)
var reg6 = /^(([1-9]\d{4,10}@qq)|(\w{6,18})@(126|163))\.com$/;


