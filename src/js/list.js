$(function(){
//手风琴部分================================================
    var isok = false;
    $("h3").on("click","span",function(event){
        // console.log($(this).parent().next());
        if(isok){
            $($(this)).parent().next().css("display","block");
            $($(this)).prop("class","open");
        }else{
            $($(this)).parent().next().css("display","none");
            $($(this)).prop("class","close");
        }
        isok = !isok; 
    });
//列表页数据渲染====================================================
    function render(){
        $.ajax({
                type : "post",
                url : "../api/list.php",
                async : true,
                data : {
                    fangfa:""
                },
                success : function(str){
                    console.log(str);
                       // console.log(JSON.parse(str));
                        var res = JSON.parse(str);
                        // console.log(res);
                        var html = res.map(function(item){
                            return`<dl data-id="${item.id}">
                                        <dt>
                                            <a href="#">
                                                <img src="../${item.url_1}" alt="" width="200" height="200"/>
                                            </a>
                                        </dt>
                                        <dd class="pro-name">
                                            <a href="#">${item.goodname}</a>
                                        </dd>
                                        <dd class="pro-price">
                                            ￥
                                            <span>
                                                <span>${item.price_no5}</span>
                                            </span>
                                            <span class="zhekou">${item.zhekou}</span>
                                        </dd>
                                        <dd class="buybtn">
                                            <a href="#">加入购物车</a>
                                            <a href="#" class="shouc">收藏</a>
                                        </dd>
                                    </dl>`;
                        }).join("");
                        $(".cplist")[0].innerHTML += html;              
                    }
        });
    }
    // render();
    function rend1(str){
        var res = JSON.parse(str);
        // console.log(res);
         var html = res.map(function(item){
             return`<dl data-id="${item.id}">
                         <dt>
                             <a href="#">
                                 <img src="../${item.url_1}" alt="" width="200" height="200"/>
                             </a>
                         </dt>
                         <dd class="pro-name">
                             <a href="#">${item.goodname}</a>
                         </dd>
                         <dd class="pro-price">
                             ￥
                             <span>
                                 <span>${item.price_no5}</span>
                             </span>
                             <span class="zhekou">${item.zhekou}</span>
                         </dd>
                         <dd class="buybtn">
                             <a href="#">加入购物车</a>
                             <a href="#" class="shouc">收藏</a>
                         </dd>
                     </dl>`;
         }).join("");
         $(".cplist")[0].innerHTML = html;
    }

//排序功能=======================================================
    var isok1 = false;
    $(".curr").on("click",function(){
        if(isok1){
            $.ajax({
                type : "post",
                url : "../api/list.php",
                async : true,
                data :{
                    fangfa : "shengxu"
                },
                success : function(str){
                    // console.log(str);
                         rend1(str);          
                }
            });
            $(".curr").addClass('up');
        }else{
            $.ajax({
                type : "post",
                url : "../api/list.php",
                async : true,
                data :{
                    fangfa : "jiangxu"
                },
                success : function(str){
                    // console.log(JSON.parse(str));
                    rend1(str);               
                }
            });
             $(".curr").removeClass('up').addClass("down");
        }
         isok1 = !isok1;
    });
//分页功能=========================================================
        //渲染代码
        function render_fenye(str){
            $(".cplist")[0].innerHTML = str.map(function(item){
                return`<dl data-id="${item.id}">
                            <dt>
                                <a href="#">
                                    <img src="../${item.url_1}" alt="" width="200" height="200"/>
                                </a>
                            </dt>
                            <dd class="pro-name">
                                <a href="#">${item.goodname}</a>
                            </dd>
                            <dd class="pro-price">
                                ￥
                                <span>
                                    <span>${item.price_no5}</span>
                                </span>
                                <span class="zhekou">${item.zhekou}</span>
                            </dd>
                            <dd class="buybtn buybtn1">
                                <a href="javascript:;" class="buy">加入购物车</a>
                                <a href="#" class="shouc">收藏</a>
                            </dd>
                        </dl>`;
            }).join("");
        }
//点击加入购物车进入详情页，在列表页传递数据ID到详情页=================
        function dianji(){
            $(".buy").on("click",function(){ 
                console.log(666); 
                var goodid = $(this).parent().parent().data("id");
                console.log(goodid);
                location.href = "details.html?"+"id="+goodid;
            })
        }
        // 分页======================
        var page = document.getElementById("page2");
        var num = 4;
        var currentPage = 1;
        var numb ="";//总页数
        $.ajax({
            type : "post",
            url : "../api/list.php",
            async : true,
            data : {
                fangfa : "fenye",
                num : num,
                currentPage : currentPage
            },
            success : function(str){
                var res = JSON.parse(str);
                var res1 = res.data;
                // console.log(res1);
                render_fenye(res1);
                 //算出总页数
                //加入购物车,点击事件
                dianji();
                numb = Math.ceil(res.total/res.num);
                var total = res.total;
                //页面总记录数
                $("strong").html(total);
                // console.log(res.total,res.num,numb);
                for(var i=0;i<numb;i++){
                            page.innerHTML += `<span>${i+1}</span>`;
                            page.children[0].className = "active";
                        }
                    page.onclick = function(e){
                          var e = window.event||event;
                          if(e.target.tagName == "SPAN"){
                              for(var i=0;i<numb;i++){
                                  page.children[i].className = "";
                              }
                              e.target.className = "active";
                              var currentPage = e.target.innerHTML;
                              //页码数动态改变
                              $(".page").html(currentPage);
                              $(".pages").html(numb);
                              $.ajax({
                                type : "post",
                                url : "../api/list.php",
                                async : true,
                                data : {
                                    currentPage : currentPage,
                                    fangfa : "fenye",
                                    num : num
                                },
                                success : function(str){
                                    // render2(res.data);
                                    var res = JSON.parse(str);
                                    var arr = res.data;
                                        // console.log(res);
                                        render_fenye(arr);
                                        dianji();
                                }
                            });
                        }
                    }
            },
            
        })
    // 上一页===========================
        $(".disa-btn").on("click",function(){
            // console.log(currentPage)
            currentPage--;
            if(currentPage>=1){
                // page.children[currentPage-1].className = "active";
                $("#page2").children().eq(currentPage-1).addClass("active").siblings().removeClass();
                //页码数动态改变
                $(".page").html(currentPage);
                $.ajax({
                    type : "post",
                    url : "../api/list.php",
                    async : true,
                    data : {
                        currentPage : currentPage,
                        fangfa : "fenye",
                        num : num
                    },
                    success : function(str){
                        // render2(res.data);
                        var res = JSON.parse(str);
                        var arr = res.data;
                            // console.log(res);
                            render_fenye(arr);
                    }
                });
            }
        });
        
        // 下一页==================
        $(".xiayiye").on("click",function(){
            // console.log(555);
            currentPage++;
            if(currentPage<=numb){

                $("#page2").children().eq(currentPage-1).addClass("active").siblings().removeClass();
                //页码数动态改变
                $(".page").html(currentPage);
                $.ajax({
                    type : "post",
                    url : "../api/list.php",
                    async : true,
                    data : {
                        currentPage : currentPage,
                        fangfa : "fenye",
                        num : num
                    },
                    success : function(str){
                        // render2(res.data);
                        var res = JSON.parse(str);
                        var arr = res.data;
                            // console.log(res);
                            render_fenye(arr);
                    }
                });
            }
        })

        
})