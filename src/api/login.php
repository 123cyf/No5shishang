<?php
    include "conn.php";
    // 获取前端传过来的用户名与数据库中的用户名进行比对看是否存在，如果存在返回1，不存在返回0
    $shenfen = isset($_POST["shenfen"])?$_POST["shenfen"]:"";
    $uName = isset($_POST["userName"])?$_POST["userName"]:"";
    $pwds = isset($_POST["password"])?$_POST["password"]:"";
    // print_r($uName,$pwds);
    $emails = isset($_POST["EMS"])?$_POST["EMS"]:"";
        // 用户验证部分
     if($shenfen == "yanzheng"){
        // print_r($uName);
        $sql = "select * from user where userName = '$uName'";

        $res = $conn -> query($sql);
        // var_dump($res->num_rows);
         if($res->num_rows){
            echo "1";
        }else{
            echo "0";
        }
     }
     // 用户注册功能
     if($shenfen == "zhuce"){
        $sql = "insert into user (userName,pwd) values ('$uName','$pwds');";
        $res = $conn->query($sql);
        // 如果插入数据成功则向前端返回标识码1;如果数据插入失败返回标识码0;
        // var_dump($res);
        if($res){
            echo "1";
        }else{
            echo "0";
        }

     }
    
    // 登录功能
    if($shenfen == "denglu"){
        $sql = "select * from user where userName = '$uName' and pwd = '$pwds'";
        $res = $conn->query($sql);
        // 如果查询的用户存在则向前端返回标识码1;如果不存在则返回标识码0;
        // var_dump($res);
        if($res->num_rows>0){
            echo "1";
        }else{
            echo "0";
        }
    }
    
    
?>