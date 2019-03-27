$(function(){
    /*
        用户名的非空和正则验证===================================
     */
    
    var isOk1 =false;
    var isOk2 =false;
    var isOk3 =false;
    var isOk4 =false;
    var isOk5 =false;
    var isOk6 = false;
    $(".img_right1").css("display","none");
        $(".reg_errmsg").html("");
    $("#txtRegUserName").on("blur",function(){
        
        if(!$("#txtRegUserName").val()==""){
            var a = $("#txtRegUserName").val();
           if(checkReg.name(a)){
                $.ajax({
                type : "post",
                url : "../api/login.php",
                async : true,
                data : {
                    userName : $("#txtRegUserName").val(),
                    shenfen : "yanzheng"
                    },
                success : function(str){
                        console.log(str);
                    // var res = JSON.parse(str);
                    if(str=="1"){
                            $(".reg_errmsg").html("该用户名太受欢迎！").css("color","red");
                    }else{
                            $(".reg_errmsg").html("该用户名可以注册").css("color","green");
                            $(".img_right1").css("display","block");
                        }
                    }
                });
                // isOk1 =true;
           }else{
                $(".reg_errmsg").html("正则验证不通过").css("color","red");
           }

        }else{
            $(".reg_errmsg").html("用户名不能为空").css("color","red");
        }
    })
    /*用户注册=============================================*/
    
    // 输入密码框判断
    $("#txtRegPassword").on("blur",function(){
        $("#txtRegPasswordChkMsg").html("");
        if(!$("#txtRegPassword").val()==""){
            if(checkReg.psweasy($("#txtRegPassword").val())){
                $(".img_right2").css("display","block");
                isOk2 = true;
                console.log(isOk2);
            }else{
                $("#txtRegPasswordChkMsg").html("正则验证不通过").css("color","red");
            }
        }else{
            $("#txtRegPasswordChkMsg").html("密码不能为空").css("color","red");
        }
    });
    // 重复输入密码框判断
    $("#txtRegPasswordagain").on("blur",function(){
        $(".img_right3").css("display","none");
        if(!$("#txtRegPasswordagain").val()==""){
                if($("#txtRegPassword").val() == $("#txtRegPasswordagain").val()){
                    $("#txtRegPasswordChkMsgagain").html("");
                    $(".img_right3").css("display","block");
                    isOk3 = true;
                     console.log(isOk3);
            }else{
                $("#txtRegPasswordChkMsgagain").html("两次请输入相同密码").css("color","red"); 
            }
        }else{
            $("#txtRegPasswordChkMsgagain").html("密码不能为空").css("color","red");
        }
    });
//电子邮箱判断
    $("#txtEmail").on("blur",function(){
        $(".img_right4").css("display","none");
         $("#txtEmailChkMsg").html("");
        if(!$("#txtEmail").val()==""){
            if(checkReg.email($("#txtEmail").val())){
                $(".img_right4").css("display","block");
                isOk4 = true;
                console.log(isOk4);
            }else{
                $("#txtEmailChkMsg").html("邮箱不符合正则").css("color","red");
            }
        }else{
            $("#txtEmailChkMsg").html("邮箱不能为空").css("color","red");
        }
    });

    // 生成一个随机验证码
    var num = "";
    $(".randomBtn").on("click",function(){
        var num = ranNum();
        $(".randomBtn").html(num);
        $("#txtVerifyCode").on("blur",function(){
                $(".img_right5").css("display","none");
                $("#txtVerifyCode").html("");
                if($("#txtVerifyCode").val()==num){
                $(".img_right5").css("display","block");
                isOk5 = true;
                 console.log(isOk5);
            }
        });
        
    });
    var check = false;
    $("#reg-proto").on("click",function(){
        console.log($("#reg-proto").prop("checked"));
        check = $("#reg-proto").prop("checked");
    });
    
    // console.log($("#reg-proto").prop("checked"));
        $("#btnUserRegSubmit").on("click",function(){
            console.log(666);
            // console.log(isOk1&&isOK2&&isOk3&&isOk4&&isOk5);
            if(isOk2&&isOk3&&isOk4&&isOk5&&check){
                
                $.ajax({
                type : "post",
                url : "../api/login.php",
                async : true,
                data : {
                    userName : $("#txtRegUserName").val(),
                    password : $("#txtRegPassword").val(),
                    password1 : $("#txtRegPasswordagain").val(),
                    EMS : $("#txtEmail").val(),
                    shenfen : "zhuce"
                    },
                success : function(str){
                        // console.log(str);
                        // 如果插入数据成功则向前端返回标识码1;如果数据插入失败返回标识码0;
                        if(str=="1"){
                            alert("恭喜您，注册成功！");
                        }else{
                            alert("对不起，注册失败");
                        }
                   
                    }
                });
            }else{
                alert("小主，请按要求填写好您的信息进行注册，谢谢");
                }
             
        })
    
    // 验证码
    $(".randomBtn1").on("click",function(){
        var num = ranNum();
        console.log(num);
        $(".randomBtn1").html(num);
        $(".testcode").on("blur",function(){
            if($(".testcode").val()==num){
                isOk6 = true;
                 console.log(isOk6);
            }
        })   
    });

    // 登录功能=======================================
    // var isOk7 = false;
    $("#btnLogin").on("click",function(){
        console.log(isOk6);
        if(!$(".login_name").val()==""&&!$(".login_pwd").val()==""&&isOk6){
            $.ajax({
                type : "post",
                url : "../api/login.php",
                async : true,
                data : {
                    userName : $(".login_name").val(),
                    password : $(".login_pwd").val(),
                    shenfen : "denglu"
                    },
                success : function(str){
                        // console.log(str);
                        // 如果用户存在则向前端返回标识码1;如果不存在则返回标识码0;
                        if(str=="1"){
                            alert("恭喜您，登录成功！");
                            location.href = "../index.html";
                            var storages = window.localStorage;
                            storages.name = $(".login_name").val();
            
                        }else{
                            alert("对不起，登录失败");
                        }
                   
                    }
                    // isOk7 = false;
                });
        }else{
            alert("用户名或密码或验证码不正确");
        }
        
    })
})


 


