// 网站右上角导航栏链接
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '子导航演示',
        items: [
            {text: 'Pycharm', link: '/Pycharm/'},
            {text: 'vue', link: '/vue/'},
            {text: 'VuePress用法', link: '/VuePressUse/'}]        // 提供一个下拉列表
    },
    {text: '关于我', link: '/AboutMe/', target:'_blank'}          // target: _blank,  _self 控制跳转形式：是否打开新页面
]