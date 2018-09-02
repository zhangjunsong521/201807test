/**
 * Created by songsong on 2018/8/15.
 */
(function () {
    var moveType ={
        linear:function linear(time,changeL,duration,beginL) {
            return changeL/duration*time+beginL;
        },
        easeIn: function (t,c,d,b) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function (t,c,d,b) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function (t,c,d,b) {
            if ((t /= d / 2) < 1) {
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }

    };

    //moveT 代表运动方式
    var timer = null;
    function move2(ele,duration,obj,moveT){
        clearInterval(ele,timer);
        var beginL={};
        var changeL={};
        moveT =moveT || 'linear';//容错机制
        for(var k in obj){
            if(obj.hasOwnProperty(k)){
                beginL[k] =utils.css(ele,k); //一开始的位置
                changeL[k] =obj[k] -beginL[k];//将要运动的距离
            }
        }
        var times=0;
        ele.timer = setInterval(function () {
            times +=20;
            if(times>=duration){
                clearInterval(timer);
                times =duration;
            }
            for(var k in obj){
                if(obj.hasOwnProperty(k)){
                    var curPos =moveType[moveT](times,changeL[k],duration,beginL[k]);
                    utils.setCss(ele,k,curPos);
                }
            }
        },20);

    }

    window.myAnimate =move2;
})();