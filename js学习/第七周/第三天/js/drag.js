/**
 * Created by songsong on 2018/8/23.
 */
function dragStart(e) {
    e = e || window.event;
    this.DragMove = dragMove.bind(this);
    this.DragEnd = dragEnd.bind(this);
    // document.onmousemove = this.DragMove;
    on(document,'mousemove',this.DragMove);
    // document.onmouseup = this.DragEnd;// 强行改变this指向
    on(document,'mouseup',this.DragEnd);
    this.startX = this.offsetLeft;
    this.startY = this.offsetTop;//盒子的初始位置
    this.mx = e.pageX;
    this.my = e.pageY;// 鼠标的初始位置
}
function dragMove(e) {
    e = e || window.event;
    var x = e.pageX - this.mx,
        y = e.pageY - this.my;
    this.style.left = this.startX + x + 'px';
    this.style.top = this.startY + y + 'px';
    if(!this.prevX){
        this.prevX = 0;
    }
    this.speed = e.pageX - this.prevX;//两次move触发时移动的距离当作速度
    this.prevX = e.pageX;
}
function dragEnd() {
    // document.onmousemove = null;
    off(document,'mousemove');
    // document.onmouseup = null;
    off(document,'mouseup');
    this.maxL = (document.documentElement.clientWidth||document.body.clientWidth) - this.offsetWidth;
    if(!this.running){// 上一次的fly不停止；新的fly 就不执行
        fire(this,'myFly');
        // fly.call(this);
    }
    this.maxT = (document.documentElement.clientHeight||document.body.clientHeight) - this.offsetHeight;
    fire(this,'myDrop');
    // drop.call(this);
}