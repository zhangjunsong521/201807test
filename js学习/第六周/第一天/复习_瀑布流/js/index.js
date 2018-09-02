var data = null;
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','./json/index.json',false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            data = utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();
var box = document.getElementsByClassName('box')[0];
var oUls = box.getElementsByTagName('ul');
var oImgs = document.getElementsByTagName('img');
function giveHtml() {
    data.forEach(function (item,index) {
        var {pic,title,height} = item;
        var li = document.createElement('li');
        var str = `<img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" trueSrc="${pic}" height="${height}" alt="">
            <p>${title}</p>`;
        li.innerHTML = str;
        var temp = getMinUl();
        temp.appendChild(li);
    });
}
giveHtml();
function getMinUl() {
    var ulAry = utils.toArray(oUls);
    ulAry.sort(function (a,b) {
        return a.clientHeight - b.clientHeight;
    });
    return ulAry[0]
}
function loadImg(ele) {
    if(ele.loaded)return;
    var scrT = utils.scrollT();
    var cliT = utils.clientH();
    var tarT = utils.offset(ele).t;
    if(scrT + cliT > tarT + 300){
        var trueSrc = ele.getAttribute('trueSrc');
        var temp = new Image();
        temp.src = trueSrc;
        temp.onload = function () {
            ele.src = trueSrc;
            ele.loaded = true;
            fadeIn(ele);
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
function getMore() {
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;
    var scrT = utils.scrollT();
    var cliT = utils.clientH();
    if(scrT + cliT > tarT){
        getData();
        giveHtml();
    }
}
function fadeIn(ele) {
    ele.style.opacity = 0;
    var opa = 0;
    var timer = setInterval(function () {
        opa += 0.1;
        ele.style.opacity = opa;
        if(opa >= 1){
            ele.style.opacity = 1;
            clearInterval(timer);
        }
    })
}














