<?php

    header('content-type:text/html;charset=utf-8');
    // 数据库变量定义；
    $servername = 'localhost';
    $username = 'root';
    $passname = 'root';
    $dbname = 'no5';

    // 建立连接
    $conn = new mysqli($servername,$username,$passname,$dbname);
    // var_dump($conn);

    if($conn->connect_error){
        die("数据库连接失败".$conn->connect_error);
    }
    $conn->set_charset('utf8');
    // echo "数据库连接成功";
?>