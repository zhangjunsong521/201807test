var banner = (function () {
    var data = null,
        timer = null,
        oUl = document.getElementsByClassName('img_box')[0],
        boxW = utils.css(oUl,'width'),//盒子的宽度
        n = 0,//记录图片个数
        index = 0,
        leftBtn = utils.getByClass('left_btn')[0],
        rightBtn = utils.getByClass('right_btn')[0],
        oDiv = document.getElementById('div1'),
        tipBox = utils.getByClass('tip_box',oDiv)[0],
// var tips = utils.getByClass('tip',tipBox);//不存在映射；获取的是静态页面的 那个元素
        tips = tipBox.getElementsByClassName('tip');
    //获取数据
    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('get','index.json',false);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                data = utils.toJson(xhr.responseText)
            }
        };
        xhr.send();
    }
    //把数据放到页面上
    function giveHtml() {
        var str = '';
        var tipStr = '';
        data.push(data[0]);//把第一张图片添加到最后一张
        data.forEach(function (item,index) {
            str += `<li>
            <img src="${item.pic}" alt="">
            <p>${item.title}</p>
        </li>`;
            if(index < data.length - 1){
                tipStr += `<li class="tip ${index == 0? 'currrent':''}">${index+1}</li>`
            }
        });
        n = data.length;
        oUl.innerHTML = str;
        tipBox.innerHTML = tipStr;
        oUl.style.position = 'relative';
        oUl.style.width = boxW*n+'px';
    }
    //自动播放
    function autoplay() {
        timer = window.setInterval(function () {
            play()
        },2000);
    }
    //播放函数
    function play() {
        if(utils.css(oUl,'left')%boxW != 0) return;
        index++;//进来先加一个数  然后这次的运动是走下一个图片
        if(index == -1){
            utils.css(oUl,'left',-boxW*(n-1));
            index = 3;
        }
        var curL = -boxW*index;
        if(curL == -boxW*n){
            index = 1;
            utils.css(oUl,'left',0);
            curL = -boxW
        }
        [...tips].forEach((item,index)=>{
            utils.removeClass(item,'current')
        });
        if(index == n-1){
            utils.addClass(tips[0],'current ')
        }else {
            utils.addClass(tips[index],'current ')
        }
        var curL = -boxW*index;
        // utils.css(oUl,'left',curL);
        myAnimate(oUl,1000,{left:curL})
    }
    //事件绑定函数
    function eventFn() {
        leftBtn.onclick = function () {
            clearInterval(timer);
            play();

        };
        rightBtn.onclick = function () {
            if(utils.css(oUl,'left')%boxW != 0 )return;
            clearInterval(timer);
            index -= 2;//让 index  整体减2  他在play 中又加了1； 相当于ul整体左移一个宽度
            play();

        };

        oDiv.onmouseenter = function () {
            clearInterval(timer);
            utils.css(leftBtn,'display','block');
            utils.css(rightBtn,'display','block');
        };
        oDiv.onmouseleave = function () {
            utils.css(leftBtn,'display','none');
            utils.css(rightBtn,'display','none');
            autoplay();
        };
    }
    //tip绑定  函数
    function tipClick() {
        for (let i = 0; i < tips.length; i++) {
            tips[i].onclick = function () {
                index = i - 1;
                play();
            }
        }

    }
    return{
        init:function () {
            getData();
            giveHtml();
            autoplay();
            eventFn();
            tipClick();
        }
    }
})();
banner.init();