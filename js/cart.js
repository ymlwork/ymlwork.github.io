//-------------------------footer-----------------------------------
//鼠标移到微信图标二维码显示
$('.icon-gongzhonghao').mouseenter(function () {
	$(this).siblings('span').css('display', 'block')
})
$('.icon-gongzhonghao').mouseleave(function () {
	$(this).siblings('span').css('display', 'none')
})
//网站安全/认证证书动画
var renZheng = (function () {
	var index = 1;
	var dsqhs = function () {
		$('.gif').children(`.img0${index}`).siblings().removeClass('img-block').addClass('img-none');
		$('.gif').children(`.img0${index}`).removeClass('img-none').addClass('img-block')
		index++;
		if (index > 2) {
			index = 1;
		}
	}
	var timer1 = setInterval(dsqhs, 2000);
	$(document).on('visibilitychange', function () {
		if (document.visibilityState == "hidden") {
			clearInterval(timer1);
		} else {
			timer1 = setInterval(dsqhs, 2000);
		}
	})
})()