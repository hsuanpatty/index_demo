$(function() {
    var $ad = $('#AD'),
        $adMask = $('.AD_mask'),
        $closeBtn = $('.AD_close'),
        $adImg = $('.AD_img');

    $adImg.load(function(){
        var winHeight = $(window).height(),
            winWidth = $(window).width(),
            ADheight = $adImg.height(),
            ADwidth = $adImg.width();

        //設定廣告垂直水平置中
        $adMask.css({
            'top': (winHeight - ADheight) / 2,
            'left': (winWidth - ADwidth) / 2
        });
    });
    
    var timer=null;
    setTimer();

    //5秒後自動消失動畫
    function setTimer() {
        timer = setTimeout(function() {
        	$ad.slideUp(300).fadeOut(0);
        }, 5000);
    }

    $adMask.hover(function() {
        // 滑鼠移入廣告，停止消失動畫，避免觀看時廣告消失
        clearTimeout(timer);
    }, function() {
        // 重新啟動消失動畫
        setTimer();
    });

    //點選關閉按鈕
    $closeBtn.click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $ad.slideUp(300).fadeOut(0);
    });
});
