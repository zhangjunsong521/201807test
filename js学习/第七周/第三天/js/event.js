/**
 * Created by songsong on 2018/8/23.
 */
function on(ele,type,f) {//type  对应报社的某个频道
    //若是JS原生事件，我们需要改变绑定方式
    if(/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if( n > -1 )return;//解决重复绑定的问题
        ele[type].push(f)
    }else {
        //需要判断 type  带不带  on  若带着on  就直接用  不带的话就不上
        // if(/^(on)/.test(type)){
        //     ele[type] = f ;
        // }else {
        //     ele['on'+type] = f ;
        // }
        type = /^(on)/.test(type) ? type : 'on' + type;
        ele[type] = f

        // ele.addEventListener(type,f,false);
    }
}
function fire(ele,type) {
    ele[type] = ele[type] || [];
    ele[type].forEach((item)=>{
        item && item.call(ele);
    })
}
function off(ele,type,f) {
    if(/^(my)/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if( n != -1){
            ele[type].splice(n,1);
        }
    }else {
        //证明是原生的
        type =  /^(on)/.test(type) ? type : 'on' + type;
        ele[type]  = null;
    }

}