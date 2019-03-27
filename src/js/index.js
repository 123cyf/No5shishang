window.onload = function(){
// trigger
// console.log($(".trigger"))
    var isOK = false;
    $(".trigger").on("click",function(){
        console.log(555);
        // console.log($("#shoppingList"));
        if(!isOK){
            $(".shoppingList").css("display","block");
        }else{
            $(".shoppingList").css("display","none");
        }
        
        isOK = !isOK;
   })
   //  $(".trigger").on("mouseout",function(){
   //      $("#shoppingList").css("display","none");
   // })
    // 轮播图==========================================================
    //找节点
    var box = document.getElementsByClassName("banner_L")[0];
    //找节点
    var lis = box.querySelectorAll('.imglist ul li');
    var light = box.querySelector('.light');
    var iW = lis[0].offsetWidth;
    var now = 0; //在可视区的那张，当前播放的轮播图下标
    //1.图片自动轮播
    //所有的图片放在右侧 并且动态创建焦点
    var html = '';
    for(var i = 0; i < lis.length; i++) {
        css(lis[i], 'left', iW + 'px');
        html += `<span>${i + 1}</span>`;
    }
    light.innerHTML = html;
    light.children[0].className = "active";
    //第一张放在可视区
    css(lis[0], 'left', 0);
    var timer = setInterval(next, 2000); //每隔两秒切换一张
    function next() {
        /*
         1.旧图(可视区)挪走
         2.新图放在右侧(预备工作)
         3.新图挪到可视区
    */
        startMove(lis[now], {
            'left': -iW
        }); //旧图(可视区)挪走,挪到可视区的左侧
        //      now ++;
        now = ++now > lis.length - 1 ? 0 : now;
        //新图准备进场,新图快速放在右侧(预备工作)
        css(lis[now], 'left', iW + 'px');
        //新图挪到可视区
        startMove(lis[now], {
            'left': 0
        });
        lightMove();
    }
    function prev() {
        //点击一次,切换回上一张,从左侧切入可视区
        //旧图挪到右侧
        startMove(lis[now], {
            'left': iW
        });
        now = --now < 0 ? lis.length - 1 : now;
        //新图准备进场,新图快速放在左侧(预备工作)
        css(lis[now], 'left', -iW + 'px');
        //新图挪到可视区
        startMove(lis[now], {
            'left': 0
        });
        lightMove();
    }
    //2.焦点跟随
    function lightMove() {
        //排他
        for(var i = 0; i < light.children.length; i++) {
            light.children[i].className = '';
        }
        light.children[now].className = "active";
    }
    //3.点击焦点可以切换对应的图片,利用事件委托
    //鼠标经过停止定时器,离开继续开启定时器
    box.onmouseover = function() {
        clearInterval(timer);
    }
    box.onmouseout = function() {
        clearInterval(timer);
        timer = setInterval(next, 2000); //每隔两秒切换一张
    }
    light.onmouseover = function(ev) {
        //      console.log(ev.target);
        var index = ev.target.innerHTML * 1 - 1;
        //      console.log(index);
        if(index > now) {
            //从右侧切入新图
            //旧图挪走,左侧
            startMove(lis[now], {
                'left': -iW
            });
            css(lis[index], 'left', iW + 'px');
            startMove(lis[index], {
                'left': 0
            });
            now = index; //新图变旧图
        }
        if(index < now) {
            //从左侧切入新图
            //旧图挪走,右侧
            startMove(lis[now], {
                'left': iW
            });
            css(lis[index], 'left', -iW + 'px');
            startMove(lis[index], {
                'left': 0
            });
            now = index; //新图变旧图
        }
        lightMove();
    }

    // 选项卡=====================================================
     $(".sale").on("click",".saletabs>ul>li",function(event){
                    console.log($(this));
                    // $($(this)).addClass('active')
                    // border-bottom: 2px solid #0094ff;
                    $($(this)).css({"borderBottom":"2px solid #0094ff"})
                    // .siblings().removeClass('active');
                    .siblings().css({"borderBottom":"none"})
                    // 点击对应的菜单显示对应的内容
                    $(".salebox").children('div')
                    .eq($(this).index())
                    .css("display","block")
                    .siblings().css("display","none");
                });


// 护肤热销部分的onmouseover事件=============================================
    $(".hufu-top").on("mouseover", "ul>li",function(){
        $($(this)).children().eq(1).css("display","block");
    });
    $(".hufu-top").on("mouseout", "ul>li",function(){
        $($(this)).children().eq(1).css("display","none");
    });

//首页数据渲染部分========================================================
      $.ajax({
                type : "post",
                url : "api/ndex.php",
                async : true,
                data : "",
                success : function(str){
                        // console.log(JSON.parse(str));
                        var res = JSON.parse(str);
                        // console.log(res);
                        var str1 = "";
                        var str2 = "";
                        var str3 = "";
                        //渲染上层部分
                        str1 += res.result1.map(function(item){
                            return`<dl  class="hufu-item firstdl t1" data-id="${item.id}">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" src="${item.url_1}" alt="" />
                        </a>
                    </dt>
                    <dd class="good-name">
                                <a href="#">${item.yingwen}</a><br />
                                <a href="#">${item.goodname}</a>
                    </dd >
                    <dd class="good-exce">
                        <a href="#">${item.good_no}</a>
                    </dd>
                    <dd class="good-price">
                        ￥
                        <span class="good-price-cur" style="font-size:18px;">
                            ${item.price_no5}
                            <span style="font-size:14px;">.00</span>
                        </span>
                        <span class="zhekou" style="font-size:14px;">${item.zhekou}</span>
                    </dd>
                </dl>`;
                        }).join("")
                    
                    // 渲染下层部分
                    // console.log(res.result2);
                    str2 += res.result2.map(function(item){
                        return` <dl class="hufu-item-d t1" data-id="${item.id}">
                    <dd class="good-name">
                                <a href="#">${item.yingwen}</a>
                    </dd >
                    <dd class="good-exce">
                        <a href="#">${item.goodname}</a>
                    </dd>
                    <dd class="good-price">
                        ￥
                        <span class="good-price-cur" style="font-size:18px;">
                            ${item.price_no5}
                            <span style="font-size:14px;">.00</span>
                        </span>
                        <span class="zhekou" style="font-size:14px;">${item.zhekou}</span>
                    </dd>
                    <dt>
                        <a href="#">
                            <img width="180" height="180" src="${item.url_1}" alt="" />
                        </a>
                    </dt>

                </dl>`;
                    }).join("");

                    // 男士和美发
                    str3 +=res.result3.map(function(item){
                        return`<dl class="men-item" data-id="${item.id}">
                            <dt>
                                <a href="javsscript:;"><img src="${item.url_1}" alt="" /></a>
                            </dt>
                            <dd class="good-name">
                                <a href="javsscript:;">${item.goodname}</a>
                            </dd>
                            <dd class="good-price">
                                ￥${item.price_no5}
                                <span class="zhekou">${item.zhekou}</span>
                            </dd>
                        </dl>`;
                    }).join("");

                        //护肤部分
                        $(".hufu1")[0].innerHTML = str1 ;
                        $(".hufu2")[0].innerHTML = str2 ;
                        $(".hufu-list")[0].innerHTML = str1 + str2;
                        // 彩妆部分
                        $(".caizhuang1")[0].innerHTML = str1 ;
                        $(".caizhuang2")[0].innerHTML = str2 ;
                        $(".hufu-list1")[0].innerHTML = str1 + str2;
                        // 男士和美发
                        $(".men-list")[0].innerHTML = str3;
                        $(".men-list1")[0].innerHTML = str3;
                    
//点击跳转到详情页======================================
                    var id = res.result3[0].id;
                    // console.log(id);
                    $(".men-list").on("click",".men-item",function(){
                        // console.log($(this).data("id"));
                        var goodid = $(this).data("id");
                        // location.href = "html/details.html?id="+goodid;
                        window.open("html/details.html?id="+goodid);
                    })
                    $(".a1").on("click",".t1",function(){
                        // console.log($(this).data("id"));
                        var goodid = $(this).data("id");
                        window.open("html/details.html?id="+goodid);
                    })
                    $(".b1").on("click",".t1",function(){
                        // console.log($(this).data("id"));
                        var goodid = $(this).data("id");
                        window.open("html/details.html?id="+goodid);
                    })


                    }
                });

//吸顶菜单==================================================
  
    $timer = null;
    $(window).scroll(function(){
        if($(window).scrollTop()>=2100){
            // console.log($(window).scrollTop());
            // $("#menu1").addClass('fix');
            $("#mainnav").addClass("fix")
            $(".nav_left2").css("display","none");
             // $(".nav_left2").hidden();   
        }else{
            $("#mainnav").removeClass("fix");
            $(".nav_left2").css("display","block");
        }
     });
//抢购倒计时====================================================
        // var countDown = document.getElementById("countDown");
        // var img = document.getElementById("btnBuy");
        // 1.设置抢购日期对象
        var d = new Date("2019/3/27 00:00:00");
        endTime();
        var timer = setInterval(endTime, 1000)

        function endTime(){
            var now = new Date();
            // 2. 获取之间相差的毫秒数/1000=>秒
            var offset = parseInt((d.getTime() - now.getTime())/1000);
            var seconds = offset%60;
            var minute = parseInt(offset/60)%60;//65分钟：1小时5分钟
            var hour = parseInt(offset/60/60)%24;//25小时：1天1小时
            var tian = parseInt(offset/60/60/24);
            $(".hour").html(hour);
            $(".min").html(minute);
            $(".sec").html(seconds);
        }
  //拿本地存储的coolie，渲染在首页====================
        
        var storages = window.localStorage;
        console.log(storages.name);
        var useName = storages.name;
       
        $(".userInfo")[0].innerHTML = useName ;
        $(".xianshi").hide();
        
        $(".exit").on("click",function(){
            console.log(666)
            $(".userInfo")[0].innerHTML = "";
            // storages.removeItem('useName');
            storages.name = '';
            $(".xianshi").show();
        });
   
    $(".ding").on("mouseover",function(){
        console.log(666);
        $(".dingdan").css("display","block");

    });
    $(".dingdan").on("mouseout",function(){
        // console.log(666);
        $(".dingdan").css("display","none");

    });
    // $(".tiaozhuan").on("click",function(){
    //     location.href = "../html/shoppingCar.html?username="+ useName
    // })
//首页购物车渲染=================================
    $.ajax({
        type:"post",
        url:"api/shoppingCar.php",
        async:true,
        data:{
            gongneng:"xuanran", 
            userName: useName
        },
        success:function(str){
                console.log(str);
                    if(str=="yes"){
                        $(".numAllText").html(0);
                        $(".numAllText1").html(0);
                        $(".ToltalPrice").html(0);
                    }else{
                        var res = JSON.parse(str);
                        // console.log(res);
                        renderShop(res);
                    }
                function renderShop(arr){
                     var numAll= 0;
                $(".goodslist")[0].innerHTML = arr.map(function(item){
                            item.nummAll = item.num;
                            return`<dl data-id="${item.xuhao}">
                                        <dt>
                                            <img src="images/diao1.jpg" alt="" />   
                                        </dt>
                                        <dd class="pro-name" style="color:black;">${item.goodname}</dd>
                                        <dd class="pro-price" >
                                        商品价格￥<span style="color:red;">${item.price_no5}</span><span style="color:red;">x</span>
                                <span style="color:red;">${item.num}</span>
                                            <a href="#" class="dell">删除</a>
                                        </dd>
                                    </dl>`;
                        }).join("");
                       function tal(arr){
                            var tall = 0;
                            var html = arr.map(function(item){
                                    return  All =item.num*1;
                            });
                            function sum(arr) {
                                    return eval(arr.join("+"));
                                };
                            sum(html);
                            
                            $(".numAllText")[0].innerHTML = sum(html);
                            $(".numAllText1")[0].innerHTML = sum(html);
                            // $(".numAllText1").html(sum(html));
                        }
                        function tal1(arr){
                            var tall = 0;
                            var html = arr.map(function(item){
                                    return  tall =item.price_no5*item.num*1;
                            });
                            function sum1(arr){
                                    return eval(arr.join("+"));
                                };
                            sum1(html);
                            $(".ToltalPrice")[0].innerHTML = sum1(html);
                        }
                    tal(res);
                    tal1(res);
                }
//首页购物车的删除功能========================
                $(".goodslist").on("click",".dell",function(e){
                    var xuhao = $(this).parent().parent().data("id");
                    if(confirm("确定要删除我吗？")){
                        $.ajax({
                            type:"post",
                            url:"api/shoppingCar.php",
                            async:true,
                            data:{
                                // num:shuliang,
                                xuhaoValue : xuhao,
                                gongneng:"dele"
                            },
                            success:function(str){
                                console.log(JSON.parse(str));
                                var res = JSON.parse(str);
                                renderShop(res);
                            }
                        });
                    }
                    // console.log(xuhao);
                })





            }
        })
 








}