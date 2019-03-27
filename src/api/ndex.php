<?php
    include "conn.php";
    $sql = "select * from goodlist";
    $res = $conn -> query($sql);
    // 查询10条记录，第一次查询前0-4条，第二次查询5-9条
    $sql1 = "select * from goodlist LIMIT 0,2";
    $res1 = $conn -> query($sql1);
    // var_dump($res1->fetch_all(MYSQLI_ASSOC));
    $sql2 = "select * from goodlist LIMIT 2,3";
    $res2 = $conn -> query($sql2);
    
    $sql3 = "select * from goodlist LIMIT 5,6";
    $res3 = $conn -> query($sql3);

    $arr1 = $res1->fetch_all(MYSQLI_ASSOC);
    $arr2 = $res2->fetch_all(MYSQLI_ASSOC);
    $arr3 = $res3->fetch_all(MYSQLI_ASSOC);
     // var_dump($arr);
    
    $arr = array(
        "result1"=>$arr1,
        "result2"=>$arr2,
        "result3"=>$arr3
        );

    //将对象转成字符串
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>