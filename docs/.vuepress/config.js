const moment = require('moment');
const secret = require('./secret');

module.exports = {
    title: 'Personal blog',                 // 设置网站标题
    description: '张珂的私人博客',          // 描述
    head: [
        ['link', {rel: 'icon', href: '/image/photo.jpg'}]   // 网站图标
    ],
    base: "/",                              // 要部署的根目录
    markdown: {                                 // 代码块中显示行号
        lineNumbers: true,
        anchor: {
            permalink: true
        },
        toc: {
            includeLevel: [1, 2]
        },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-abbr')),
                md.use(require('markdown-it-sub')),
                md.use(require('markdown-it-sup')),
                md.use(require('markdown-it-mark')),
                md.use(require('markdown-it-kbd')),
                md.use(require('markdown-it-underline')),
                md.use(require('markdown-it-footnote'))
        }
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github-v4',
            owner: 'sherrykeeper',
            repo: 'blog',
            clientId: secret.clientId,
            clientSecret: secret.clientSecret,
            autoCreateIssue: true
        },
        '@vuepress/last-updated': true,
        '@vuepress/back-to-top': true,
        '@vuepress/google-analytics':
        {
            'ga': secret.ga
        }
    },
    themeConfig: {                              // 主题的配置信息
        lastUpdated: '上次更新',
        displayAllHeaders: true,                // 显示所有页面的标签链接，默认值：false
        search: true,
        logo: '/image/photo.jpg',
        author: '张珂',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,                     // 嵌套标题的最大深度，能够匹配到一级，二级，三级标题。
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        smoothScroll: true
    }
}
