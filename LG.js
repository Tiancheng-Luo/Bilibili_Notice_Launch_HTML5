/**
 * Created by LG on 2016-08-18.
 */
 $(function () {
     var btn_wrap = $(".bgray-btn-wrap");

     function Recheck () {
        console.log('还没刷出广告，进行Recheck()')
        var ad_node_check =$(".bilibili-player-promote-wrap");
        setTimeout(function () {
            if(!ad_node_check.length){
                Recheck ();
            }else{
                console.log('干掉广告！！')
                ad_node_check.remove();
            }
        }, 1000);
    }
    if(btn_wrap.length){
        //1,去掉广告
        var ad_node =$(".bilibili-player-promote-wrap");
        $(".bgray-btn-wrap div:first-child").click(function() {
            Recheck();
        });
        if(ad_node.length){
            console.log('广告走开！！');
            ad_node.remove();
        }else{
                //如果选择的是Flash，提示是否选择HTML5
                if($(".bgray-btn-wrap").children(".active").length){
                    if($(".bgray-btn-wrap").children(".active").text()=="Flash播放器"){
                        if(confirm("现在的默认播放器是Flash播放器,更改为HTML5播放器吗？")){
                            $(".bgray-btn-wrap div:first-child").click();
                        }else{
                            console.log('我就要用Flash看超清！！');
                            return;
                        }
                    }
                }
                //网速不好，还没有刷出来的情况
                Recheck ();
            }
        }else{
        //跳转到打开HTML5开关的页面提示用户选择
        if(confirm("您还没有设置HTML5播放器作为默认播放器哦，前往设置吗？")){
           window.open("http://www.bilibili.com/html/help.html#p");
       }
   }
 console.log("bilibili-launch_HTML5 is runing...");
});