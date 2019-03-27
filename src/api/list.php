<?php
    include "conn.php";
    $fangfa = isset($_POST["fangfa"])?$_POST["fangfa"]:"";
    $num = isset($_POST["num"]) ? $_POST["num"] : "";
    $currentPage = isset($_POST["currentPage"]) ? $_POST["currentPage"] : "";
    $index= ($currentPage - 1) * $num;
    // var_dump($fangfa);
    if($fangfa == ""){
        //页面渲染
        $sql1 = "select * from goodlist";
        $res1 = $conn ->query($sql1);
        $arr1 = $res1->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr1,JSON_UNESCAPED_UNICODE);
    }

    if($fangfa == "shengxu"){
        //价格升序
        $sql1 = "select * from goodlist order by price_no5";
        $res1 = $conn ->query($sql1);
        $arr1 = $res1->fetch_all(MYSQLI_ASSOC);
        echo json_encode($arr1,JSON_UNESCAPED_UNICODE);
    }

    if($fangfa == "jiangxu"){
        //价格降序
        $sql1 = "select * from goodlist order by price_no5 desc";
        $res1 = $conn ->query($sql1);
        $arr1 = $res1->fetch_all(MYSQLI_ASSOC);
        // var_dump($arr1);
        echo json_encode($arr1,JSON_UNESCAPED_UNICODE);
    }

    if($fangfa == "fenye"){
        $sql1 = "select * from goodlist LIMIT $index,$num";
        $sql2 = "select * from goodlist";
        $res2 = $conn ->query($sql2);
        $res1 = $conn ->query($sql1);
        $arr1 = $res1->fetch_all(MYSQLI_ASSOC);
        
        $arr = array(
            "data"=>$arr1,
            "total"=>$res2->num_rows,
            "num"=>$num,
            "currentPage"=>$currentPage
        );
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }
    // 分页功能
    


    // $arr = array(
    //     "result1"=>$arr1,
    //     "result2"=>$arr2,
    //     "result3"=>$arr3
    //     );
     //将对象转成字符串
   
?>