// 随机产生一个min到max之间的随机整数
function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

// 封装一个生成随机颜色的函数
function getColor() {
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += rand(0, 15).toString(16)
    };
    return color;
}

// 判断数组arr里面是否含有元素num
function has(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return true;
        }
    }
    return false;
}

//引入HTML中的ID
function $id(id) {
    return document.getElementById(id);
}

//随机获得一个n位数的验证码，包含字母大小写和数字
function getYZM(n) {
    var str = '';
    for (var i = 0; i < n; i++) {
        var num = rand(48, 122);
        if ((num > 57 && num < 65) || (num > 90 && num < 97)) {
            i--;
        } else {
            str += String.fromCharCode(num);
        }
    }
    return str;
}


//获取页面向X轴和Y轴滚动的距离
function getScroll() {
    if (window.pageYOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.documentElement.scrollTop) {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}

// 封装一个函数来返回指定元素的指定样式
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        // 如果能进这里，非IE，说明window.getComputedStyle存在
        return window.getComputedStyle(dom, null)[attr]
    } else {
        // 如果进这里，IE浏览器
        return dom.currentStyle[attr]

    }
}