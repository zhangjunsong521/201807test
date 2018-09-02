/**
 * Created by songsong on 2018/9/2.
 */

var $oul = $('.ulBox');
var $lisBox = $('.listBox');


/*
* 轮播图
* */

function bannerFn() {
    var mySwiper = new Swiper('.bannerBox',{
        autoplay:{
            //用户操作后  仍然自动播放
            disableOnInteraction:false,
            //一个图   在当前窗口的停留时间
            delay:1000,
        },
        loop:true,//是否无缝滚动
        pagination: {// 分页器
            el: '.pageBox',//分页器的盒子
            type: 'fraction',//分页器的类型  1/2
            currentClass:'currentPage',//变动数字的盒子的类名
            totalClass:'totalPage'//总共数字  盒子的类名
        },
    });
}

/*
* 获取数据
* */
// $.ajax({
//     type:'get',//请求方式
//     url:'./data/banner.json',//请求路径
//     data:{//发送给后台的数据
//         t:123,
//         q:234,
//     },
//     success:function (data) {//请求成功后执行的函数
//         giveHtml(data);//请求成功后把数据直接放到页面上
//     },
//     error:function () {//请求失败后执行的函数
//
//     }
// });
function giveHtml(data) {//把数据转成页面可见的元素
    data = data || [];
    var str = '';//用来存  拼接好的  结构  字符串
    data.forEach((item)=>{
        str += `<li class="swiper-slide">
                    <a href="##">
                        <img src="${item.img}" alt="">
                        <div>${item.title}</div>
                    </a>
                </li>`
    });
    $oul.html(str);
    // bannerFn();
    //先请求数据  在吧数据放到页面上  然后在执行轮播图函数
}

// promise  写法
var p = new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'./data/banner.json',
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            reject(res)

        }
    })
});
p.then(function (data) {
    //第一个函数  是promise  执行成功后的函数
    giveHtml(data);
    return data;
}).then(function (data) {
    bannerFn();
}).catch(function (res) {
    console.log(res);
});

/*
* 新闻列表部分
* */
var listPro = new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'./data/list.json',
        data:{t:1},
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            reject(res)
        }
    })
});
function givelistHtml(data) {
    data = data || [];
    var str = '';
    data.forEach((item)=>{
        switch (item.type){
            //无图
            case 0:
                str += `<a href="##">
        <div class="text_box">
            <p>${item.title}</p>
            <div class="comment_box">
                <em class="">
                    <span class="">${item.num}</span>
                    <span class="icon_com"></span>
                </em>
            </div>
        </div>
    </a>`;
                break;
            //一张图
            case 1:
                str += `<a href="##">
            <div class="img_box">
                <img src="${item.img}" alt="">
            </div>
            <div class="text_box">
                <p>${item.title}</p>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>
            </div>
        </a>`;
                break;
            //三张图
            case 3:
                str += `<a href="##" class="three_box">
            <p>${item.title}</p>
            <div class="three_pic ">
                <div><img src="${item.img[0]}" alt=""></div>
                <div><img src="${item.img[1]}" alt=""></div>
                <div><img src="${item.img[2]}" alt=""></div>
            </div>
            <div class="comment_box">
                <em class="">
                    <span class="">${item.num}</span>
                    <span class="icon_com"></span>
                </em>
            </div>
        </a>`;
                break;
        }
    });
    $lisBox.html(str);
}
listPro.then(function (data) {
   givelistHtml(data);
});
