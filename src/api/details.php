<?php
    include "conn.php";
    $gongneng = isset($_POST["gongneng"])?$_POST["gongneng"]:"";
    $goodid = isset($_POST["goodid"])?$_POST["goodid"]:"";
    $goodname = isset($_POST["goodname"])?$_POST["goodname"]:"";
    $good_no = isset($_POST["good_no"])?$_POST["good_no"]:"";
    $price_nomal = isset($_POST["price_nomal"])?$_POST["price_nomal"]:"";
    $price_no5 = isset($_POST["price_no5"])?$_POST["price_no5"]:"";
    $num = isset($_POST["num"])?$_POST["num"]:"";
    $userName = isset($_POST["userName"])?$_POST["userName"]:"";
    
    if($gongneng=="xuanran"){
        // $goodid = isset($_POST["goodid"]) ? $_POST["goodid"] : "";
        // echo $goodid;
        $sql = "select * from goodlist where id = '$goodid'";
        $res = $conn->query($sql);
        $content = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }

    if($gongneng=="cungouwuche"){
        $sql1 = "select num from shoppingCar where id ='$goodid' and userName ='$userName'";
        $res1 = $conn->query($sql1);
        $content = $res1->fetch_all(MYSQLI_ASSOC);
        // var_dump($content)
        
        if($res1->num_rows){
            $num1 = $content[0]['num'];
            $num = $num + $num1;
            $sql = "update shoppingCar set num = $num where id = $goodid";
            $res = $conn->query($sql);
            echo 1;
        }else{
            $sql = "insert into shoppingCar (id,good_no,userName,goodname,price_nomal,price_no5,num) values ('$goodid','$good_no','$userName','$goodname','$price_nomal','$price_no5','$num')";
            $res = $conn->query($sql);
            echo 0;
        }
        
        // if($res){
        //     echo 1;
        // }else{
        //     echo 0;
        // }
    }
    
?>