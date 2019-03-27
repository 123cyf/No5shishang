<?php
    // include "conn.php";
    
    // $goodnum = isset($_POST["goodnum"]) ? $_POST["goodnum"] : "";
    // $sql = "select num from shoppingCar where id='$goodid'";
    // $res = $conn->query($sql);
    // //判断前端传过来的数据ID在购物车表中是否存在相应的记录，如果存在则update商品数量，然后返回前端渲染数据，如果不存在则查询数据返回给前端渲染到购物车页
    // if($res->num_rows){
    //     $sql2 ="update shoppingCar set num = '$goodnum' where id= '$goodid' ";
    //     $res2 = $conn->query($sql2);
    //     if($res2){
    //         $sql3 = "select * from shoppingCar where id = $goodid";
    //         $res3 = $conn->query($sql3);
    //         $content = $res3->fetch_all(MYSQLI_ASSOC);
    //         echo json_encode($content,JSON_UNESCAPED_UNICODE);
    //     }else{
    //         echo 1;
    //     }
        
    // }else{
    //     $sql2 = "update goodlist set num = '$goodnum' where id= '$goodid'";
    //     $res2 = $conn->query($sql2);
    //     $sql3 ="select * from goodlist where id = $goodid";
    //     $res3 = $conn->query($sql3);
    //     $content = $res3->fetch_all(MYSQLI_ASSOC);
    //     echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // }
    include "conn.php";
    $gongneng = isset($_POST["gongneng"])?$_POST["gongneng"]:"";
    $num = isset($_POST["num"])?$_POST["num"]:"";
    $userName = isset($_POST["userName"]) ? $_POST["userName"] : "";
    $xuhaoValue = isset($_POST["xuhaoValue"])?$_POST["xuhaoValue"]:"";
    //第一次渲染购物车
    if($gongneng=="xuanran"){
            
            $sql = "select * from shoppingCar where userName = '$userName'";
            $res = $conn->query($sql);
            if($res->num_rows){
                $content = $res->fetch_all(MYSQLI_ASSOC);
                echo json_encode($content,JSON_UNESCAPED_UNICODE);
            }else{
                echo "yes";
            }
            // $sql = "select * from shoppingCar where userName = '$userName'";
            // $res = $conn->query($sql);
            // $content = $res->fetch_all(MYSQLI_ASSOC);
            // echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }
    //数量更新之后返回数据再对购物车做渲染
    if($gongneng=="upda"){
        $sql="update shoppingcar set num = $num where xuhao = '$xuhaoValue'";
        $res = $conn->query($sql);
        if($res){
            $sql1="select * from shoppingCar where userName = '$userName'";
            $res1 = $conn->query($sql1);
            $content1 = $res1->fetch_all(MYSQLI_ASSOC);
            echo json_encode($content1,JSON_UNESCAPED_UNICODE);
        }
    }
    //删除单条记录
    if($gongneng=="dele"){
        $sql = "delete from shoppingcar where xuhao='$xuhaoValue'";
        $res = $conn->query($sql);
        if($res){
            $sql1="select * from shoppingCar where userName = '$userName'";
            $res1 = $conn->query($sql1);
            $content1 = $res1->fetch_all(MYSQLI_ASSOC);
            echo json_encode($content1,JSON_UNESCAPED_UNICODE);
        }
    }
    //删除全部数据
    if($gongneng=="del_all"){
        $sql = "delete  from shoppingcar";
        $res = $conn->query($sql);
        if($res){
            $sql1="select * from shoppingCar";
            $res1 = $conn->query($sql1);
            $content1 = $res1->fetch_all(MYSQLI_ASSOC);
            echo json_encode($content1,JSON_UNESCAPED_UNICODE);
        }
    }

?>


         