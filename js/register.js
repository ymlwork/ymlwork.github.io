
var reg = /^([a-z]|[A-Z]|\d)\w{5,10}$/;
var mima = null;
var zhanghao = null;
//监测账号
$('.un').on('input', function () {
	if (reg.test($('.un').val())) {
		$('.hint').html('用户名合格')
		$('.hint').removeClass('red').addClass('green')
		zhanghao = true;
	} else {
		$('.hint').html('用户名必须字母或数字开头且长度为6-11位字母数字下划线')
		$('.hint').removeClass('green').addClass('red')
		zhanghao = false;
	}
})
//监测密码
$('.pw').on('input', function () {
	if (/^[\w~!@#]{8,12}$/.test($('.pw').val()) && /\d+/.test($('.pw').val()) && /[A-Z]+/.test($('.pw').val()) && /[a-z]+/.test($('.pw').val()) && /[~!@#]+/.test($('.pw').val())) {
		$('.hint1').html("密码强度高");
		$('.hint1').removeClass('red').addClass('green');
		mima = true;
	}
	if (/^[\w~!@#]{8,12}$/.test($('.pw').val())) {
		$('.hint1').html("密码强度低");
		$('.hint1').removeClass('red').addClass('green');
		mima = true;
	} else {
		$('.hint1').html('密码必须是8-12的字母,数字或者特殊符号');
		$('.hint1').removeClass('green').addClass('red');
		mima = false;
	}
})
//发送请求
$('.bt').click(function () {
	if (mima && zhanghao) {
		$.ajax({
			url: '../json/rejister.json',
			dataType: 'json',
			success: function (res) {
				if (res.code == 1) {
					if (!localStorage.getItem($('.un').val())) {
						localStorage.setItem($('.un').val(), $('.pw').val());
						alert('注册成功!');
						location.href = './login.html';
					} else {
						$('.hint').html('用户名已存在！')
						$('.hint').removeClass('green').addClass('red')
					}
				} else {
					$('.hint').html('未知错误')
					$('.hint').removeClass('green').addClass('red')
				}
			}
		})
	} else {
		// $('.hint').html('用户名必须字母开头且长度为6-10位字母数字下划线')
		// $('.hint1').html('密码必须是8-12的字母,数字或者特殊符号');
		return;
	}

})
// localStorage.clear()