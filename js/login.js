
$('.bt').on('click', function () {
	$('.hint').html('');
	$('.hint').removeClass('error');
	$.ajax({
		url: '../json/login.json',
		dataType: 'json',
		success: function (res) {
			if (res.code == 1) {
				if (localStorage.getItem($('.un').val()) == $('.pw').val()) {
					alert('登陆成功，即将跳转到首页');
					localStorage.setItem('status', $('.un').val());
					location.href = './index.html';
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
$('.un').on('input', function () {
	$('.hint').html(null);
})
$('.pw').on('input', function () {
	$('.hint').html(null);
})