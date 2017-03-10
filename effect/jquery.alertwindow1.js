jQuery.extend({
    alertWindow: function(e, t) {
			 // console.log("清空之前运行的数据")
	 $(".alertWindow1").detach();
        var e = e,
            t = t;
			if ($("body").find(".alertWindow1").length === 0) {
            var i = '<div class="alertWindow1" style="width: 185px;height: 82px;background-color: rgba(0, 0, 0, 0.29);position: fixed;color: #fff;z-index:200;border-radius: 4px;font-size: 14px;text-align: center;display:none;">'
                +'<p class="tips-title" style="margin: 6px;">'
                + e
                +'</p>'
								+'<div class="tips-content" style="background-color: rgba(0, 0, 0, 0.56);height: 45px;text-align: center;line-height: 20px;padding: 4px 8px 0 8px;">'
                +'<p>'
								+	t
                +'</p>'
								+"</div>"
								+"</div>";
		}
            $("body").append(i);
            var window_height = $(window).height();
            var window_width = $(window).width();
            // 根据窗口位置判定弹出层的位置
            $(".alertWindow1").css({
                "top": parseInt(window_height) / 2 - 41 + "px",
                "left": parseInt(window_width) / 2 - 92.5 + "px"
            })

            $(".tips-title").text(e);
            $(".alertWindowContent").text(t);

            //慢速显示，延迟1000ms后5000ms消失
			$(".alertWindow1").css({"display":"block"});
      if(parseInt($(".tips-content p").height()) > 22 ){
    // 根据字体的多少判定弹出层内容的位置
    $(".tips-content p").css({"margin-top":"4px"})
    } else {
    $(".tips-content p").css({"padding-top":"0"})
    }
            $(".alertWindow1").fadeIn("slow");
            $(".alertWindow1").delay(1000).fadeOut(1000);
    }
})

/* console.log("清空之前运行的数据")
	 $(".alertWindow1").detach();//清空之前运行的数据 */
