function setRem() {
    var ui_w = 375;

    // 获取屏幕的宽度

    var client_w = document.documentElement.clientWidth || document.body.clientWidth;

    // 通过js动态改变html根节点字体大小

    var html_ = document.getElementsByTagName('html')[0];

    html_.style.fontSize = (client_w / ui_w) * 10 + 'px';
    client_w = client_w > 750 ? 750 : client_w;
    client_w = client_w < 300 ? 300 : client_w;

}

// window.onresize 浏览器被重置大小执行事件

window.onresize = setRem;

window.onload = setRem;
