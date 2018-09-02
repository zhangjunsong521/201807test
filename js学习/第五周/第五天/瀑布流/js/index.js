/**
 * Created by songsong on 2018/8/12.
 */
var data = null;//这是用来存储从后台获取的数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','json/1.json',false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            data = utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();

/*
* 第二部  把数据渲染到页面上
* */

var oDiv = document.getElementsByClassName('box')[0];
var oUl = document.getElementsByTagName('ul');
var ulAry = utils.toArray(oUl);//类数组转成数组
var oImgs = document.getElementsByTagName('img');
// var oImgs2 = document.querySelectorAll('img');
// function giveHtml(data) {
//     data.forEach(function (item,index) {
//         /*
//          * index  是 从 0 到  data.length；
//          * 要知道每一条数据放到哪个ul里面；我们在这里把前四条依次放到4个ul中；
//          * 后四条在依次放入  4个ul中  这样依次进行就可以了
//          * index%4
//          * */
//         var {pic,title} = item;//这个是对象的结构赋值
//         var str = `<li>
//                 <img src="../img/1.jpg"  trueSrc="${pic}" alt="">
//                 <p>${title}</p>
//             </li>`;
//         //这个是挨个排序的； 导致长短差距越来越大
//         // var n = index%4;
//         // oUl[n].innerHTML += str;
//
//
//         //排序的方式，换成每次给最矮的那个ul 排数据
//         getMinUl().innerHTML += str;
//     });
// }
function giveHtml(data) {
    data.forEach(function (item,index) {
        var {pic,title} = item;
        var li = document.createElement('li');
        var str = `<li>
                <img src="../img/1.jpg"  trueSrc="${pic}" alt="">
                <p>${title}</p>
            </li>`;
        li.innerHTML = str;
        var temp = getMinUl();
        temp.appendChild(li);
    });
}
/*
* 找个子最低的那个ul  minUl
* */

function getMinUl() {
    ulAry.sort((a,b)=>{
        return a.clientHeight - b.clientHeight
    });
    return ulAry[0]
}
giveHtml(data);


/*
* 接下来实现图片的懒加载；我们需要先把真实路径存放到  img自定义属性上  给img一个默认的小图
* */

/*
* 图片懒加载
* */
function loadImg(ele) {
    if(ele.loaded)return;
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var tarT = utils.offset(ele).t;
    if (scrT + cliH > tarT){
        var temp = document.createElement('img');
        var trueSrc = ele.getAttribute('trueSrc');//真实路径
        temp.src = trueSrc;
        temp.onload = function () {
            ele.src = trueSrc;
            ele.loaded = true;
            fadeIn(ele)
        };
        temp = null;
    }
}
function loadAll(eles) {
    for (var i = 0; i < eles.length; i++) {
        loadImg(eles[i])
    }
}
loadAll(oImgs);
window.onscroll = function () {
    loadAll(oImgs);
    getMore();
};
function fadeIn(ele) {
    ele.style.opacity = 0 ;
    var opa = 0.1 ;
    var timer = setInterval(function () {
        opa += 0.1;
        ele.style.opacity = opa;
        if (opa >= 1){
            ele.style.opacity = 1 ;
            clearInterval(timer);
        }
    },20)
}


/*
* 加载新数据
* */
function getMore() {
    var scrt = utils.scrollT();
    var cliH = utils.clientH();
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;  //最低的那个ul的高度 + ul到body的距离
    if (scrt + cliH > tarT){
        getData();//获取新数据
        giveHtml(data);
    }
}



