//获取本地存储里的cart的值，根据情况渲染购物车页面
function getCart() {
	// 先获取原来的商品列表数组
	var productList = getCart();
	if (productList.length == 0) {
		$('.table').hide();
		$('.nothing').show();
	} else {
		$('.nothing').hide();
		$('.table').show();
		var num = 0;
		for (var i = 0; i < productList.length; i++) {
			var trData = productList[i];
			num += trData.product_num * (trData.product_price.slice(0, -1));
			$('tbody').append(`<tr align="center">
							<td class="img"><img src="${trData.product_img}" alt=""></td>
							<td class='spName'>${trData.product_name}</td>
							<td>${trData.product_price}</td>
							<td>
								<span class="cut">-</span>
								<span class='xxnum'>${trData.product_num}</span>
								<span class="add">+</span>
							</td>
							<td class='del'>删除</td>
						</tr>`)
		}
	}
	$('.heji').html(num)
	$('.add').click(function () {
		var spName = $(this).parents('tr').children('.spName').html();
		console.log(spName)
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				item.product_num = item.product_num / 1 + 1;
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.cut').click(function () {
		var spName = $(this).parents('tr').children('.spName').html();
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				item.product_num = item.product_num / 1 - 1;
				if (item.product_num <= 0) {
					item.product_num = 0;
				}
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.del').click(function () {
		var spName = $(this).parent().children('.spName').html();
		productList.forEach(function (item) {
			if (item.product_name == spName) {
				var newarr = productList.indexOf(item);
				productList.splice(newarr, 1);
				return;
			}
		})
		setCart(productList);
		location.href = '';
	})
	$('.fuqian').click(function () {
		if (localStorage.getItem('status')) {
			alert('点击确认即可完成结算');
		} else {
			var con = confirm('您还没有登录哦，请点击确定前往登录页面');
			if (con == true) {
				location.href = './login.html'
			} else {
				return;
			}
		}
	})

	function getCart() {
		var list = localStorage.getItem('cart') || "[]"; //字符串
		return JSON.parse(list);
	}
	function setCart(arr) {
		localStorage.setItem('cart', JSON.stringify(arr))
	}
}
getCart()







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