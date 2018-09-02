/**
 * Created by songsong on 2018/8/7.
 */
var reg = /[abc]/;//字符串中有a或b或c
var reg1 = /^[abc]$/;//代表单个  a b c
reg.test('abc');//true
reg.test('a');//true
reg1.test('abc');//false
reg1.test('c');//true

var reg2 = /^[abc]+$/;//
reg2.test('abc');//true
reg2.test('aaa');//true

var reg4 = /^abc$/;//只能匹配“abc”
//以a开头   以c结尾  中间只能是b

var reg6 = /^[2.3]$/;
//在中括号中的  .  是代表点这个符号本身
var reg7 = /^2.3$/;
