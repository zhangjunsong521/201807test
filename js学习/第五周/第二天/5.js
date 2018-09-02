/**
 * Created by songsong on 2018/8/8.
 */
var str = "https://www.souyidai.com/soeasy/invest/onlinelist?productType=1&pageNo=0&repayMode=-1&orderBy=DEFAULT&t=0.642114887216358";
var per = /([^?=&]+)=([^?=&]+)/g;
console.log(str.match(per));