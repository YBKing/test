//摘要显示更多
$("[data-toggle]").click(function () {
    var els = $(this).data("toggle");
    if($(this).hasClass("fold")){
        $(this).removeClass("fold");
        $("#" + els).removeAttr("style");
    }else{
        $(this).addClass("fold");
        $("#" + els).css({
            "height": "auto"
        });
    }
});
//目录收缩/展开
$("[data-menu]").click(function () {
    var menu = $(this).data("menu");
    $("#" + menu).toggle();
    $("#" + menu).find(".chapter").removeClass("on");
});
$(".chapter").click(function () {
    $(this).parent().siblings().find(".chapter").removeClass("on");
    $(this).toggleClass("on");
});