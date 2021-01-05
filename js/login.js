
$('.bt').on('click', function () {
	$('.hint').html('');
	$('.hint').removeClass('error');
	$.ajax({
		url: '../json/login.json',
		dataType: 'json',
		success: function (res) {
			if (res.code == 1) {
				if (localStorage.getItem($('.un').val()) == $('.pw').val()) {
					alert('登陆成功，即将跳转到购物车');
					localStorage.setItem('status', '1');
					location.href = './cart.html';
				} else {
					$('.hint').html('用户名或密码错误');
					$('.hint').addClass('error');
				}
			} else {
				$('.hint').html('未知错误');
				$('.hint').addClass('error');
			}
		}
	})
})