// 左边栏的导航
module.exports = [
    {
        title: 'Pycharm使用教程',
        path: '/Pycharm',
        children:[
            ['/Pycharm/','Pycharm使用教程']
        ]
        //collapsable: false,             //控制子目录是否可折叠，默认 true
    },
    {
        title: 'vue',
        path: '/vue',
        children: [                     // 文章目录，构建出来的文件会按照顺序链接
            ['/vue/', 'Vue快速入门']           // 本地地址， 显示文字
        ]
    },
    {
        title: 'VuePress用法',
        path: '/VuePressUse',
        children: [
            ['/VuePressUse/', 'VuePress用法'],   // README.md 文件是必要文件
        ],
    },
    {
        title: 'Markdown拓展插件',
        path: '/vue/Markdown',
        children:[
            ['/vue/Markdown','Markdown拓展插件']
        ]
    },
    {
        title: 'JavaScript',
        path: '/JavaScript',
        children:[
            ['/JavaScript/','JavScript'],
            ['/JavaScript/DOM','DOM树']
        ]
    },
    {
        title: 'Unity',
        path: '/unity',
        children: [
            ['/unity/','项目开发']
        ]
    },
    {
        title: 'WhenIsGood',
        path: '/WhenIsGood',
        children: [
            ['/WhenIsGood/', '项目开发日志']
        ]
    }
]