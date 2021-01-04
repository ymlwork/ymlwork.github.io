//轮播图
var mySwiper = new Swiper('.swiper-container', {
	//direction: 'vertical', // 垂直切换选项
	loop: true, // 循环模式选项
	autoplay: {
		disableOnInteraction: false,
		dalay: 1000,
	},
	speed: 1000,

	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},

	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// 如果需要滚动条
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
});

//小米闪购秒杀倒计时
function daojishi() {
	var date2 = new Date('2021-1-4 23:54:00');
	function fn() {
		var date1 = Date.now();
		var date = parseInt(Math.abs(date1 - date2) / 1000);
		var hours = parseInt(date / 3600);
		date -= hours * 3600;
		var minutes = parseInt(date / 60);
		var seconds = date - minutes * 60;
		if (hours < 10) {
			$('.hours').html(`0${hours}`);
		} else {
			$('.hours').html(hours);
		}
		if (minutes < 10) {
			$('.minutes').html(`0${minutes}`);
		} else {
			$('.minutes').html(minutes);
		}
		if (seconds < 10) {
			$('.seconds').html(`0${seconds}`);
		} else {
			$('.seconds').html(seconds);
		}
		if (date1 < date2) {
			$('.zhuangtai').html('距离结束还有');
		}
		if (date1 >= date2) {
			$('.zhuangtai').html('本场已结束');
			clearInterval(timer1);
			$('.hours').html('00');
			$('.minutes').html('00');
			$('.seconds').html('00');
		}
	}
	if (date2.getHours() < 10 && date2.getMinutes() >= 10) {
		$('.timexxx').html(`0${date2.getHours()}:${date2.getMinutes()}场`);
	}
	if (date2.getHours() >= 10 && date2.getMinutes() < 10) {
		$('.timexxx').html(`${date2.getHours()}:0${date2.getMinutes()}场`);
	}
	if (date2.getHours() < 10 && date2.getMinutes() < 10) {
		$('.timexxx').html(`0${date2.getHours()}:0${date2.getMinutes()}场`);
	}
	if (date2.getHours() >= 10 && date2.getMinutes() >= 10) {
		$('.timexxx').html(`${date2.getHours()}:${date2.getMinutes()}场`);
	}
	var timer1 = setInterval(fn, 1000)
}
daojishi();
//小米闪购ul定位变化
function splist() {
	var spleft = 0;
	function fn() {
		$('.djssplist').animate({ left: spleft }, 800);
		spleft -= 992;
		if (spleft < -1984) {
			spleft = 0;
		}
	}
	var timer2 = setInterval(fn, 5000);
}
splist()

//用ajax请求数据渲染家电
function ajaxGet(a) {
	$('.jd_splist').html('');
	$.ajax({
		url: '../json/jiadian_' + a + '.json',
		dataType: 'json',
		success: function (data) {
			data.map(function (item, index) {
				if (index == 7) {
					$('.jd_splist').append(`<li class="li8 jd_lastli jd_li8">
							<div class="lastli_box1 yinying">
								<p class="jd_p8">${item.p}</p><span class="jd_span18">${item.sp}</span><img src="${item.img}" alt="">
							</div>
							<div class="lastli_box2 yinying">
								<p>浏览更多</p><span class="jd_span19">${item.span}</span><img src="../images/右箭头.png" alt="">
							</div>
						</li>`)
				} else {
					$('.jd_splist').append(`<li class="li${index + 1} yinying jd_li${index + 1}"><img src="${item.img}" alt="">
							<h3 class="jd_h3${index + 1}">${item.h3}</h3>
							<p class="jd_p1">${item.p}</p>
							<div><span class="sp01 js_span04">${item.sp01}</span><span class="sp02 js_span05">${item.sp02}</span></div>
							<a href="#"></a>
						</li>`)
				}
			})
		}
	})
}
ajaxGet('hot');
$('.jd_span02').on('mouseenter', function () {
	$('.jd_span03').removeClass('bianse').addClass('bubianse');
	$('.jd_span02').removeClass('bubianse').addClass('bianse');
	ajaxGet('tv')
})
$('.jd_span03').on('mouseenter', function () {
	$('.jd_span03').removeClass('bubianse').addClass('bianse');
	$('.jd_span02').removeClass('bianse').addClass('bubianse');
	ajaxGet('hot');
})