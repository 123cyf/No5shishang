"use strict";window.onload=function(){var isOK=!1;$(".trigger").on("click",function(){console.log(555),isOK?$(".shoppingList").css("display","none"):$(".shoppingList").css("display","block"),isOK=!isOK});for(var box=document.getElementsByClassName("banner_L")[0],lis=box.querySelectorAll(".imglist ul li"),light=box.querySelector(".light"),iW=lis[0].offsetWidth,now=0,html="",i=0;i<lis.length;i++)css(lis[i],"left",iW+"px"),html+="<span>"+(i+1)+"</span>";light.innerHTML=html,light.children[0].className="active",css(lis[0],"left",0);var timer=setInterval(next,2e3);function next(){startMove(lis[now],{left:-iW}),now=++now>lis.length-1?0:now,css(lis[now],"left",iW+"px"),startMove(lis[now],{left:0}),lightMove()}function prev(){startMove(lis[now],{left:iW}),now=--now<0?lis.length-1:now,css(lis[now],"left",-iW+"px"),startMove(lis[now],{left:0}),lightMove()}function lightMove(){for(var n=0;n<light.children.length;n++)light.children[n].className="";light.children[now].className="active"}box.onmouseover=function(){clearInterval(timer)},box.onmouseout=function(){clearInterval(timer),timer=setInterval(next,2e3)},light.onmouseover=function(n){var e=1*n.target.innerHTML-1;now<e&&(startMove(lis[now],{left:-iW}),css(lis[e],"left",iW+"px"),startMove(lis[e],{left:0}),now=e),e<now&&(startMove(lis[now],{left:iW}),css(lis[e],"left",-iW+"px"),startMove(lis[e],{left:0}),now=e),lightMove()},$(".sale").on("click",".saletabs>ul>li",function(n){console.log($(this)),$($(this)).css({borderBottom:"2px solid #0094ff"}).siblings().css({borderBottom:"none"}),$(".salebox").children("div").eq($(this).index()).css("display","block").siblings().css("display","none")}),$(".hufu-top").on("mouseover","ul>li",function(){$($(this)).children().eq(1).css("display","block")}),$(".hufu-top").on("mouseout","ul>li",function(){$($(this)).children().eq(1).css("display","none")}),$.ajax({type:"post",url:"api/ndex.php",async:!0,data:"",success:function(n){var e=JSON.parse(n),s="",t="",i="";s+=e.result1.map(function(n){return'<dl  class="hufu-item firstdl t1" data-id="'+n.id+'">\n                    <dt>\n                        <a href="#">\n                            <img width="180" height="180" src="'+n.url_1+'" alt="" />\n                        </a>\n                    </dt>\n                    <dd class="good-name">\n                                <a href="#">'+n.yingwen+'</a><br />\n                                <a href="#">'+n.goodname+'</a>\n                    </dd >\n                    <dd class="good-exce">\n                        <a href="#">'+n.good_no+'</a>\n                    </dd>\n                    <dd class="good-price">\n                        ￥\n                        <span class="good-price-cur" style="font-size:18px;">\n                            '+n.price_no5+'\n                            <span style="font-size:14px;">.00</span>\n                        </span>\n                        <span class="zhekou" style="font-size:14px;">'+n.zhekou+"</span>\n                    </dd>\n                </dl>"}).join(""),t+=e.result2.map(function(n){return' <dl class="hufu-item-d t1" data-id="'+n.id+'">\n                    <dd class="good-name">\n                                <a href="#">'+n.yingwen+'</a>\n                    </dd >\n                    <dd class="good-exce">\n                        <a href="#">'+n.goodname+'</a>\n                    </dd>\n                    <dd class="good-price">\n                        ￥\n                        <span class="good-price-cur" style="font-size:18px;">\n                            '+n.price_no5+'\n                            <span style="font-size:14px;">.00</span>\n                        </span>\n                        <span class="zhekou" style="font-size:14px;">'+n.zhekou+'</span>\n                    </dd>\n                    <dt>\n                        <a href="#">\n                            <img width="180" height="180" src="'+n.url_1+'" alt="" />\n                        </a>\n                    </dt>\n\n                </dl>'}).join(""),i+=e.result3.map(function(n){return'<dl class="men-item" data-id="'+n.id+'">\n                            <dt>\n                                <a href="javsscript:;"><img src="'+n.url_1+'" alt="" /></a>\n                            </dt>\n                            <dd class="good-name">\n                                <a href="javsscript:;">'+n.goodname+'</a>\n                            </dd>\n                            <dd class="good-price">\n                                ￥'+n.price_no5+'\n                                <span class="zhekou">'+n.zhekou+"</span>\n                            </dd>\n                        </dl>"}).join(""),$(".hufu1")[0].innerHTML=s,$(".hufu2")[0].innerHTML=t,$(".hufu-list")[0].innerHTML=s+t,$(".caizhuang1")[0].innerHTML=s,$(".caizhuang2")[0].innerHTML=t,$(".hufu-list1")[0].innerHTML=s+t,$(".men-list")[0].innerHTML=i,$(".men-list1")[0].innerHTML=i;e.result3[0].id;$(".men-list").on("click",".men-item",function(){var n=$(this).data("id");window.open("html/details.html?id="+n)}),$(".a1").on("click",".t1",function(){var n=$(this).data("id");window.open("html/details.html?id="+n)}),$(".b1").on("click",".t1",function(){var n=$(this).data("id");window.open("html/details.html?id="+n)})}}),$timer=null,$(window).scroll(function(){2100<=$(window).scrollTop()?($("#mainnav").addClass("fix"),$(".nav_left2").css("display","none")):($("#mainnav").removeClass("fix"),$(".nav_left2").css("display","block"))});var d=new Date("2019/3/27 00:00:00");endTime();var timer=setInterval(endTime,1e3);function endTime(){var n=new Date,e=parseInt((d.getTime()-n.getTime())/1e3),s=e%60,t=parseInt(e/60)%60,i=parseInt(e/60/60)%24;parseInt(e/60/60/24);$(".hour").html(i),$(".min").html(t),$(".sec").html(s)}var storages=window.localStorage;console.log(storages.name);var useName=storages.name;$(".userInfo")[0].innerHTML=useName,$(".xianshi").hide(),$(".exit").on("click",function(){console.log(666),$(".userInfo")[0].innerHTML="",storages.name="",$(".xianshi").show()}),$(".ding").on("mouseover",function(){console.log(666),$(".dingdan").css("display","block")}),$(".dingdan").on("mouseout",function(){$(".dingdan").css("display","none")}),$.ajax({type:"post",url:"api/shoppingCar.php",async:!0,data:{gongneng:"xuanran",userName:useName},success:function success(str){if(console.log(str),"yes"==str)$(".numAllText").html(0),$(".numAllText1").html(0),$(".ToltalPrice").html(0);else{var res=JSON.parse(str);renderShop(res)}function renderShop(arr){var numAll=0;function tal(arr){var tall=0,html=arr.map(function(n){return All=1*n.num});function sum(arr){return eval(arr.join("+"))}sum(html),$(".numAllText")[0].innerHTML=sum(html),$(".numAllText1")[0].innerHTML=sum(html)}function tal1(arr){var tall=0,html=arr.map(function(n){return tall=n.price_no5*n.num*1});function sum1(arr){return eval(arr.join("+"))}sum1(html),$(".ToltalPrice")[0].innerHTML=sum1(html)}$(".goodslist")[0].innerHTML=arr.map(function(n){return n.nummAll=n.num,'<dl data-id="'+n.xuhao+'">\n                                        <dt>\n                                            <img src="images/diao1.jpg" alt="" />   \n                                        </dt>\n                                        <dd class="pro-name" style="color:black;">'+n.goodname+'</dd>\n                                        <dd class="pro-price" >\n                                        商品价格￥<span style="color:red;">'+n.price_no5+'</span><span style="color:red;">x</span>\n                                <span style="color:red;">'+n.num+'</span>\n                                            <a href="#" class="dell">删除</a>\n                                        </dd>\n                                    </dl>'}).join(""),tal(res),tal1(res)}$(".goodslist").on("click",".dell",function(n){var e=$(this).parent().parent().data("id");confirm("确定要删除我吗？")&&$.ajax({type:"post",url:"api/shoppingCar.php",async:!0,data:{xuhaoValue:e,gongneng:"dele"},success:function(n){console.log(JSON.parse(n)),renderShop(JSON.parse(n))}})})}})};