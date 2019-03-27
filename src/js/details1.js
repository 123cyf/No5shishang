$(function(){
    // 详情页选项卡========================================================
    $("#tabBar").on("click", "ul li", function(event){
        $($(this)).addClass("active").siblings().removeClass("active");
        console.log($("#tabBar"));
        $("#content").children().eq($(this).index()).css("display","block").siblings().css("display","none");
    });

    // 详情页评论功能======================================================
    var xuanran = document.getElementById("xuanran");
    // console.log(xuanran);
    $(".pinglunBtn").on("click",function(){
        $("#txt").css("display","block");

    });
    $("#txt").html("");
    $("#txt").focus();
    $(".tijiao").on("click",function(){

        var textContent = $("#txt").val();
        // console.log(textContent);
        // render();
       var str = `<div class="eva">
                                <div class="e_l">
                                    <p>${textContent}</p>
                                    <p class="icon_xin5"></p>
                                </div>
                                <div class="e_r">
                                    <p>嗖嗖跳出来</p>
                                    <p class="shenfen">[标准会员]</p>
                                    <p class="time">2018-2-12 12:30:20</p>
                                </div>
                                <div class="clear"></div>
                            </div>`;
        xuanran.innerHTML = str + xuanran.innerHTML ;

    })
 //吸顶操作=============================

        $timer = null;
            $(window).scroll(function(){

                if($(window).scrollTop()>=2110){
                    console.log(666);
                    console.log($(window).scrollTop());
                    console.log($("#tabBar"));
                    $("#tabBar").addClass("fix");

                    // $(".nav_left2").css("display","none");
                     // $(".nav_left2").hidden();   
                }else{
                    $("#tabBar").removeClass("fix");
                    // $(".nav_left2").css("display","block");
                }
             });



    // 回归顶部===========================================================
    var top = 0;
    $($(window)).scroll(function(){
        top = $(window).scrollTop();
        // console.log(top);
        if($(window).scrollTop()>500){
                        // console.log($(window).scrollTop());
            $(".toTop").click(function(){
                if(top>0){
                    $('html ,body').stop().animate({scrollTop: 0}, 1000);
                        }
            });
        }
    });

    // 接收列表页传输的数据进行处理，渲染页面==================================
   // console.log(location.href);
   var opt = decodeURI(location.search).slice(1);//去掉第一个问号
   // console.log(opt);
   //将字符串重新整理变成对象
   function strToObj(str) {
       //第一步：以&作为切割点
       var json = {};//创建一个空的json
       var arr1 = str.split('&');
    //console.log(arr1);
       for(var i = 0; i < arr1.length; i++) {
           //第二步：以=作为切割点
           var arr2 = arr1[i].split('=');//[id,001] [name,iphone7 plugs]
           json[arr2[0]] = arr2[1];//json[键名] = 键值；
       }
    // console.log(json);
       return json;
   }
   var good = strToObj(opt);
   // console.log(good.id);
   var id = good.id;
   var gongneng = "";
    $.ajax({
        type:"post",
        url:"../api/details.php",
        async:true,
        data:{
            goodid : id,
            gongneng:"xuanran"
        },
        success:function(str){
            // console.log(str);
            var res = JSON.parse(str);
            console.log(res);
            var goodname = res[0].goodname;
            var good_no = res[0].good_no;
            var price_nomal = res[0].price_nomal;
            var price_no5 = res[0].price_no5;
            console.log(res)
            console.log(id,goodname,good_no,price_nomal,price_no5)
            // console.log(res[0].goodname);
            var htmla = "";
            var htmlb = "";
            htmla = res.map(function(item){
                return`   
                            <div class="imglist">
                                <ul>
                                    <li class="active">
                                        <img src="../${item.url_1}" alt="">
                                    </li>
                                    <li>
                                        <img src="../${item.url_2}" alt="">
                                    </li>
                                    <li>
                                        <img src="../${item.url_3}" alt="">
                                    </li>
                                    <li>
                                        <img src="../${item.url_4}" alt="">
                                    </li>
                                    <li>
                                        <img src="../${item.url_5}" alt="">
                                    </li>
                                </ul>
                            </div>
                            <div class="imgpart">
                                 
                                 <div class="pic">
                                     <img src="../${item.url_1}" alt="">
                                    
                                     <div class="magnify"></div>
                                 </div>
                                 
                                 <div class="bigpic">
                                     <img src="../${item.url_1}" alt="">
                                 </div>
                            </div>`;
                            
            }).join("");
              //放大镜渲染             
            $(".imgdet").html(htmla);
            htmlb = res.map(function(item){
                return`  <h2>${item.goodname}</h2>
                    <div class="cppro">
                        <div class="pro_name">英文名称：</div>
                        <div class="n_neir">${item.yingwen}</div>
                        <div class="pro_name">商品编号：</div>
                        <div class="n_neir">${item.good_no}</div><br />
                        <div class="pro_name " >No5   价：</div>
                        <div class="n_neir">
                            <span class="prodRedTxt price">￥${item.price_no5}.00</span>
                            <span class="prodTxt1">市场价： ￥${item.price_nomal}.00</span>
                            <span class="prodTxt1" id="rebate">折扣： ${item.zhekou}</span>
                        </div>
                    </div>
                    <div class="cppro">
                        <div class="pro_name">所属品牌:</div>
                        <div class="n_neir">
                            <a href="#">${item.goodname}</a>
                            ——>
                            <a href="#">彩妆系列</a>
                        </div>
                        <div class="pro_name">所属分类:</div>
                        <div class="n_neir">
                            <a href="#">彩妆</a>
                            ——>
                            <a href="#">底妆</a>
                            ——>
                            <a href="#">粉底液</a>
                        </div>
                        <div class="pro_name">用户评分:</div>
                        <div class="n_neir">
                            <div class="sp_xin_box">
                                <div>
                                    <div class="sp_xin_line"></div>
                                </div>
                                <div class="star_rank"></div>
                            </div>
                            <div class="sp_user_count shuliang">
                                <a href="#">
                                已有
                                    <span class="magenta">${item.haoping}</span>
                                    条评论
                                </a>
                            </div>
                        </div>
                        <div class="pro_name">运费说明:</div>
                        <div class="n_neir">
                            <span class="prodRedTxt">购物满80元免费快递</span>
                            <a href="#">查看运费详情</a>
                        </div>
                        <div class="pro_name">消费保障:</div>
                        <div class="n_neir">
                            <span class="prodTxt2">
                                <img src="../images/01.jpg" width="18" height="15" alt="" />
                            </span>
                            品质承诺
                            <span class="prodTxt2">
                                <img src="../images/01.jpg" width="18" height="15" alt="" />
                            </span>
                            品质承诺
                            <span class="prodTxt2">
                                <img src="../images/01.jpg" width="18" height="15" alt="" />
                            </span>
                            品质承诺
                            <span class="prodTxt2">
                                <img src="../images/01.jpg" width="18" height="15" alt="" />
                            </span>
                            品质承诺
                        </div>
                        <div class="pro_name">服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       务：</div>
                        <div class="n_neir">
                            本商品由 
                            <span style="color:skyblue;">No5时尚广场</span>
                             销售
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="boxBuy">
                        <span class="numbtn" style="width:124px;height:24px;display:inline-block;font-size:12px;">
                            我要买：
                            <img class="cut"  src="../images/jian.jpg" width="13" height="13" style="vertical-:  ;align:middle" alt="" />
                            <input type="text" id="buyAnt" value="1" class="textinput"  />
                            <img class="add" src="../images/jia.jpg" width="13" height="13" style="vertical-:   ;align:middle" alt="" />
                        </span>
                        <button id="btnBuy" type="button" class="prodBtn1 btnBuy"></button>
                        <button type="btnFav" id="btnFav" class="prodBtn1 btnFav">
                            <input type="hidden" />
                        </button>
                        <div class="clear"></div>
                    </div>
                    <span id="favSuc">收藏成功
                        <a href="#">[查看收藏夹]</a>
                    </span>`;
            }).join("");
            $(".part01_r").html(htmlb);

            // 数量加减功能==============
            var num = 1;
            $(".cut").on("click",function(e){
                // console.log($(this).next().val());
                var numValue = $(this).next().val()*1;
                numValue-- ;
                if(numValue < 1){
                    numValue = 1;
                }
                $(this).next().val(numValue);
                console.log(numValue)
                num = numValue;
            })

            $(".add").on("click",function(e){
                // console.log($(this).next().val());
                var numValue = $(this).prev().val()*1;
                numValue++ ;
                if(numValue >100){
                numValue = 100;
                }
                $(this).prev().val(numValue);
                // console.log(numValue)
                num = numValue;
            })
            // console.log(res.goodname);
            //改变详情页所选商品的数量=================
            $(".textinput").on("keyup",function(){
                var numValue = $(".textinput").val();

                if(numValue >100){
                    numValue = 100;
                }
                if(numValue<1){
                    numValue = 1;
                }
                num = numValue;
                console.log(num);
            })
            // 点击加入购物车然后将数据传输给购物车页面
            // console.log($("#btnBuy"))
            var storages = window.localStorage;
            console.log(storages.name);
            var useName = storages.name;
            $("#btnBuy").on("click",function(){
                $.ajax({
                    type:"post",
                    url:"../api/details.php",
                    async:true,
                    data:{
                        goodid:id,
                        goodname:goodname,
                        good_no:good_no,
                        price_nomal:price_nomal,
                        price_no5:price_no5,
                        num:num,
                        gongneng:"cungouwuche",
                        userName:useName
                    },
                    success:function(str){
                        console.log(str)
                        location.href ="shoppingCar.html?"+"id="+id+"&num="+num;
                    }
                })
            });
            















        }
       



    });
})



