//-------------------------header-----------------------------------
//鼠标移入in_subiconfont高亮
$('.in_sub').mouseenter(function () {
	$(this).siblings('i').css({
		'background': '#ff6700',
		'color': '#ffffff'
	})
})
$('.in_sub').mouseleave(function () {
	$(this).siblings('i').css({
		'background': '',
		'color': '#888'
	})
})
//鼠标划入下载APP 二维码显示
$('.xiazai').mouseenter(function () {
	$('.erweima').stop().slideDown(200, 'linear');
})
$('.xiazai').mouseleave(function () {
	$('.erweima').stop().slideUp(200, 'linear');
})
//鼠标移入.li时item-children显示
$('.li').mouseenter(function () {
	$(this).children('.item-children').stop().slideDown(500, 'linear');
	$(this).siblings().children('.item-children').finish().slideUp()
})
$('.li').mouseleave(function () {
	$(this).children('.item-children').stop().slideUp(500, 'linear');
})
//fome表单placeholder
var seachArr = ['小米10', '小米电视', '小爱音响', '耳机', '个护', '空调', '家电'];
var placeholderVal = (function () {
	var index = 0;
	var valueChange = function () {
		var in_text = document.getElementsByClassName('in_text')[0];
		in_text.placeholder = seachArr[index];
		index++;
		if (index >= seachArr.length) {
			index = 0;
		}
	}
	var timer2 = setInterval(valueChange, 3000);
	$(document).on('visibilitychange', function () {
		if (document.visibilityState == "hidden") {
			clearInterval(timer2);
		} else {
			timer2 = setInterval(valueChange, 3000);
		}
	})
	//表单输入框高亮事件
	$('.in_text').parent().on({
		'mouseenter': function () {
			$(this).css('border', '1px solid #777');
			$(this).children('.in_text').css('border-right', '1px solid #777')
		},
		'mouseleave': function () {
			$(this).css('border', '1px solid rgba(0,0, 0, 0.2)');
			$(this).children('.in_text').css('border-right', '1px solid rgba(0,0, 0, 0.2)')
		}
	})
	$('.in_text').on({
		'focus': function () {
			$(this).parent().off('mouseenter');
			$(this).parent().off('mouseleave');
			$(this).parent().css('border', '1px solid #ff6700');
			$(this).css('border-right', '1px solid #ff6700')
			clearInterval(timer2);
			$('.guanjianzi').stop().slideDown(300, 'linear');
		},
		'blur': function () {
			$(this).parent().on({
				'mouseenter': function () {
					$('.in_text').parent().css('border', '1px solid #777');
					$('.in_text').css('border-right', '1px solid #777')
				},
				'mouseleave': function () {
					$('.in_text').parent().css('border', '1px solid rgba(0,0, 0, 0.2)');
					$('.in_text').css('border-right', '1px solid rgba(0,0, 0, 0.2)')
				}
			})
			timer2 = setInterval(valueChange, 3000);
			$('.guanjianzi').stop().slideUp(300, 'linear', function () {
				$('.in_text').parent().css('border', '1px solid rgba(0,0, 0, 0.2)');
				$('.in_text').css('border-right', '1px solid rgba(0,0, 0, 0.2)')
			});
		}
	})
})()
//鼠标移入li，三级菜单.children显示
$('.children').parent().hover(function () {
	$(this).children('.children').css('display', 'block');
}, function () {
	$(this).children('.children').css('display', 'none');
})


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
