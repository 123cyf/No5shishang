$(function(){
//接收详情页传输的数量和ID，并且在数据库中进行查询然后渲染到购物车页面============
// console.log(location.href);
   // var opt = decodeURI(location.search).slice(1);//去掉第一个问号
   // function strToObj(str) {
   //     var json = {};//创建一个空的json
   //     var arr1 = str.split('&');
   //     for(var i = 0; i < arr1.length; i++) {
   //         var arr2 = arr1[i].split('=');//[id,001] [name,iphone7 plugs]
   //         json[arr2[0]] = arr2[1];//json[键名] = 键值；
   //     }
   //     return json;
   // }
   // var good = strToObj(opt);
   // var username = good.username;
   
    
    var storages = window.localStorage;
    console.log(storages.name);
    var useName = storages.name;
    var res = null;
    $.ajax({
        type:"post",
        url:"../api/shoppingCar.php",
        async:true,
        data:{
            gongneng:"xuanran",
            userName:useName
        },
        success:function(str){
            console.log(str);
            // console.log(JSON.parse(str));
                if(str=="yes"){
                     $(".total").html(0);
                }else{
                   res = JSON.parse(str);
                   console.log(res);
                    render(res);
                }
            
                 // res = JSON.parse(str);
                 //    render(res);
            
            //封装渲染代码
            function render(str){
                var html = "";
                $(".goods1")[0].innerHTML = res.map(function(item){
                    item.xiaoji = item.price_no5*item.num;
                    
                    return`<ul class="goods_info">
                                <li >${item.xuhao}</li>
                                <li >${item.goodname}</li>
                                <li>30ml</li>
                                <li>￥${item.price_nomal}</li>
                                <li class="danjia">￥${item.price_no5}</li>
                                <li ><input type="text" class="num"  value="${item.num}"/></li>
                                <li class="xiaoji">${item.xiaoji}</li>
                                <li>转入收藏夹</li>
                                <li class="del">删除</li>
                            </ul>`;
                }).join("");

                function tal(arr){
                    var tall = 0;
                    var html = arr.map(function(item){
                            return  tall =item.price_no5*item.num*1;
                    });
                    function sum(arr) {
                            return eval(arr.join("+"));
                        };
                    sum(html);
                    $(".total")[0].innerHTML = sum(html);
                }
                    tal(res);
            }
            
            //改变购物车页面的产品数量价格也跟着改变============================
            $(".goods1").on("keyup",".num",function(e,){
                // console.log($(this).val())
                var shuliang = $(this).val();
                var xuhao = $(this).parent().parent().children().eq(0).html();
                // console.log(xuhao);
                var price = $(this).parent().prev().html().slice(1);
                var zong = shuliang*price;
                $(this).parent().next().html(zong);
                $.ajax({
                    type:"post",
                    url:"../api/shoppingCar.php",
                    async:true,
                    data:{
                        num:shuliang,
                        xuhaoValue : xuhao,
                        gongneng:"upda",
                        userName:useName
                    },
                    success:function(str){
                        // console.log(JSON.parse(str));
                        res = JSON.parse(str);
                        render(res);

                    }
                });
                // tal(res);
                // render(res);
            })
        //删除单条记录功能=========================================
            $(".goods1").on("click",".del",function(){
                var xuhao = $(this).parent().children().eq(0).html();
                console.log(xuhao)
                if(confirm("确定要删除我吗？")){
                    $.ajax({
                        type:"post",
                        url:"../api/shoppingCar.php",
                        async:true,
                        data:{
                            // num:shuliang,
                            xuhaoValue : xuhao,
                            gongneng:"dele",
                            userName:useName
                        },
                        success:function(str){
                            console.log(JSON.parse(str));
                            res = JSON.parse(str);
                            render(res);

                        }
                    });
                }
                
            })
            //清空购物车========================================
            $(".del_all").on("click",function(){
                if(confirm("确定要清空所有数据吗？")){
                    $.ajax({
                        type:"post",
                        url:"../api/shoppingCar.php",
                        async:true,
                        data:{
                            // num:shuliang,
                            // xuhaoValue : xuhao,
                            gongneng:"del_all"
                        },
                        success:function(str){
                            console.log(JSON.parse(str));
                            res = JSON.parse(str);
                            render(res);

                        }
                    });
                }
            })

        }
    })
    

//     var res = null;
//     $.ajax({
//         type:"post",
//         url:"../api/shoppingCar.php",
//         async:true,
//         data:{
//             gongneng:"xuanran",
//         },
//         success:function(str){
//             res = JSON.parse(str);
//             //封装渲染代码
//             function render(str){
//                 var html = "";
//                 $(".goods1")[0].innerHTML = res.map(function(item){
//                     item.xiaoji = item.price_no5*item.num;
                    
//                     return`<ul class="goods_info">
//                                 <li >${item.xuhao}</li>
//                                 <li >${item.goodname}</li>
//                                 <li>30ml</li>
//                                 <li>￥${item.price_nomal}</li>
//                                 <li class="danjia">￥${item.price_no5}</li>
//                                 <li ><input type="text" class="num"  value="${item.num}"/></li>
//                                 <li class="xiaoji">${item.xiaoji}</li>
//                                 <li>转入收藏夹</li>
//                                 <li class="del">删除</li>
//                             </ul>`;
//                 }).join("");

//                 function tal(arr){
//                     var tall = 0;
//                     var html = arr.map(function(item){
//                             return  tall =item.price_no5*item.num*1;
//                     });
//                     function sum(arr) {
//                             return eval(arr.join("+"));
//                         };
//                     sum(html);
//                     $(".total")[0].innerHTML = sum(html);
//                 }
//                     tal(res);
//             }
//             render(res);
//     //改变购物车页面的产品数量价格也跟着改变============================
//             $(".goods1").on("keyup",".num",function(e,){
//                 var shuliang = $(this).val();
//                 var xuhao = $(this).parent().parent().children().eq(0).html();
//                 var price = $(this).parent().prev().html().slice(1);
//                 var zong = shuliang*price;
//                 $(this).parent().next().html(zong);
//                 $.ajax({
//                     type:"post",
//                     url:"../api/shoppingCar.php",
//                     async:true,
//                     data:{
//                         num:shuliang,
//                         xuhaoValue : xuhao,
//                         gongneng:"upda"
//                     },
//                     success:function(str){
//                         res = JSON.parse(str);
//                         render(res);

//                     }
//                 });
//             })
// //删除单条记录功能=========================================
//             $(".goods1").on("click",".del",function(){
//                 var xuhao = $(this).parent().children().eq(0).html();
//                 console.log(xuhao)
//                 if(confirm("确定要删除我吗？")){
//                     $.ajax({
//                         type:"post",
//                         url:"../api/shoppingCar.php",
//                         async:true,
//                         data:{
//                             xuhaoValue : xuhao,
//                             gongneng:"dele"
//                         },
//                         success:function(str){
//                             console.log(JSON.parse(str));
//                             res = JSON.parse(str);
//                             render(res);

//                         }
//                     });
//                 }
                
//             })

// //清空购物车========================================
//             $(".del_all").on("click",function(){
//                 if(confirm("确定要清空所有数据吗？")){
//                     $.ajax({
//                         type:"post",
//                         url:"../api/shoppingCar.php",
//                         async:true,
//                         data:{
//                             gongneng:"del_all"
//                         },
//                         success:function(str){
//                             console.log(JSON.parse(str));
//                             res = JSON.parse(str);
//                             render(res);

//                         }
//                     });
//                 }
//             })
//         }
//     })

    //点击继续购物跳转到列表页==================================
    $(".goshopping").on("click",function(){
        location.href = "list.html";
    })

    //点击新会员进入注册页面，点击登录进入登录页
    $(".liw").on("click","a",function(e){
        location.href = "login.html";
    })
})