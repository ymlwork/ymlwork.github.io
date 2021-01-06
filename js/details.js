$('.hd_ul2').parent().on('mouseenter', function () {
	$('.hd_ul2').show();
})
$('.hd_ul2').parent().on('mouseleave', function () {
	$('.hd_ul2').hide();
})
//渲染商品详情页
async function getJson() {
	var jsonName = localStorage.getItem('jsonName');
	var data = await $.ajax({
		url: `../json/${jsonName}.json`,
		dataType: 'json'
	})
	$('.main_left').html(`<img src="${data[0].img}" alt=""
					width="560px">`);
	$('.spName').html(`${data[0].h3}`);
	$('.spMiaoshu').html(`${data[0].p}`);
	$('.spJiage').html(`${data[0].h3} 白色<span>${data[0].sp01}<i>${data[0].sp02}</i>`);
	$('.spZongji').html(`总计：${data[0].sp01}`);
	$('.spBT').on('click', function () {
		var newProduct = {
			product_id: jsonName,
			product_name: data[0].h3,
			product_img: data[0].img,
			product_price: data[0].sp01,
			product_num: 1
		};

		// 先获取原来的商品列表数组
		var productList = getCart();
		// 把新商品添加进去
		//如果有同id商品，不能直接push，要把num增加
		if (productList.length == 0) {
			productList.push(newProduct);
		} else {
			var bool = true;
			productList.forEach(function (item) {
				if (item.product_name == data[0].h3) {
					item.product_num = item.product_num / 1 + 1;
					bool = false;
				}
				if (!bool) {
					return;
				}
			})
			if (bool) {
				productList.push(newProduct);
			}
		}
		function getCart() {
			var list = localStorage.getItem('cart') || "[]"; //字符串
			return JSON.parse(list);
		}
		function setCart(arr) {
			localStorage.setItem('cart', JSON.stringify(arr))
		}
		// 存回本地存储
		setCart(productList)
		location.href = './cart.html'
	})
	// localStorage.setItem('cart', '[]')
}
getJson()