// 放大镜插件
// $(function () {(function () { var ulobj = $(".imglist ul"); var picimg = $(".imgpart .pic img"); var objimg = $(".imgpart .bigpic img"); ulobj.on("mouseenter", "li", function () { var imgsrc = $(this).children("img").attr("src"); $(this).addClass("active").siblings().removeClass("active"); picimg.attr("src", imgsrc); objimg.attr("src", imgsrc) }); var pic = $(".imgpart .pic"); var magnify = $(".imgpart .pic .magnify"); var bigpic = $(".imgpart .bigpic"); var objimg = $(".imgpart .bigpic img"); pic.mousemove(function (e) { magnify.show(); bigpic.show(); var pagex = e.pageX; var pagey = e.pageY; var pictop = pic.offset().top; var picleft = pic.offset().left; var magnifyw = magnify.width(); var magnifyh = magnify.height(); var magnifytop = pagey - pictop - magnifyh / 2; var magnifyleft = pagex - picleft - magnifyw / 2; var picw = pic.width() - magnifyw; var pich = pic.height() - magnifyh; magnifytop = magnifytop < 0 ? 0 : magnifytop; magnifyleft = magnifyleft < 0 ? 0 : magnifyleft; magnifytop = magnifytop > pich ? pich : magnifytop; magnifyleft = magnifyleft > picw ? picw : magnifyleft; magnify.css({ top: magnifytop, left: magnifyleft }); var minl = bigpic.width() - objimg.width(); var mint = bigpic.height() - objimg.height(); var objimgl = -magnifyleft * 2; var objimgt = -magnifytop * 2; objimgl = objimgl < minl ? minl : objimgl; objimgt = objimgt < mint ? mint : objimgt; objimg.css({ top: objimgt, left: objimgl }) }); pic.mouseleave(function () { magnify.hide(); bigpic.hide() }) })() });
// 放大镜插件
$(function() {
    (function() {
        var ulobj = $(".imgdet").children(".imglist").children();
        var picimg = $(".imgdet").children(".imgpart").children(".pic").children().eq(0);
        var objimg = $(".imgdet").children(".imgpart").children(".bigpic").children();
        $(".imgdet").on("mouseenter", "li", function() {
            var imgsrc = $(this).children("img").attr("src");
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().next().children(".pic").children().eq(0).attr("src", imgsrc);
            $(this).parent().parent().next().children(".bigpic").children().attr("src", imgsrc)
        })

        var pic = $(".imgdet .imgpart .pic");
        var magnify = $(".imgdet .imgpart .pic .magnify");
        var bigpic = $(".imgdet .imgpart .bigpic");
        var objimg = $(".imgdet .imgpart .bigpic img");
        console.log(objimg);

        $(".imgdet").on("mouseover",".imgpart",function(e){
            // console.log(888);
            $(".imgdet .imgpart .pic .magnify").css("display","block");
            $(".imgdet .imgpart .bigpic").css("display","block");
        })
        $(".imgdet").on("mouseout",".imgpart",function(e){
            // console.log(888);
            $(".imgdet .imgpart .pic .magnify").css("display","none");
            $(".imgdet .imgpart .bigpic").css("display","none");
        })
        $(".imgdet").on("mousemove", ".magnify", function(e) {
            // console.log(666);
            var pagex = e.pageX;
            var pagey = e.pageY;

            var pictop = $(".imgdet .imgpart .pic").offset().top;
            var picleft = $(".imgdet .imgpart .pic").offset().left;
            
            var magnifyw = $(".imgdet .imgpart .pic .magnify").width();
            var magnifyh = $(".imgdet .imgpart .pic .magnify").height();

            var magnifytop = pagey - pictop - magnifyh / 2;
            var magnifyleft = pagex - picleft - magnifyw / 2;

            var picw = $(".imgdet .imgpart .pic").width() - magnifyw;
            var pich = $(".imgdet .imgpart .pic").height() - magnifyh;

            magnifytop = magnifytop < 0 ? 0 : magnifytop;
            magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
            magnifytop = magnifytop > pich ? pich : magnifytop;
            magnifyleft = magnifyleft > picw ? picw : magnifyleft;
            $(".imgdet .imgpart .pic .magnify").css({ top: magnifytop, left: magnifyleft });
            var minl = $(".imgdet .imgpart .bigpic").width() - $(".imgdet .imgpart .bigpic img").width();
            var mint = $(".imgdet .imgpart .bigpic").height() - $(".imgdet .imgpart .bigpic img").height();

            var objimgl = -magnifyleft * 2;
            var objimgt = -magnifytop * 2;

            objimgl = objimgl < minl ? minl : objimgl;
            objimgt = objimgt < mint ? mint : objimgt;
            $(".imgdet .imgpart .bigpic img").css({ top: objimgt, left: objimgl })
        })
    })()
});