const secret = require('./secret');
const moment = require('moment');

module.exports = {
    title: 'Personal blog',                 // 设置网站标题
    description: '张珂的私人博客',           // 描述
    head: [
        ['link', {rel: 'icon', href: '/image/photo.jpg'}],   // 网站图标
        ['script', {}, `          
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?ccb97a55fe8087c2ded9c51b3d2c8f5a";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        `],     // 百度推送
    ],
    base: "/",                                  // "/blog/" 发布到github上；；    "/"发布到个人网站上
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
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-code-copy',
        'reading-progress',
        '@vuepress/last-updated',
        '@vuepress/plugin-nprogress',
        [
            '@vssue/vuepress-plugin-vssue',
            {
                platform: 'github-v4',
                owner: 'sherrykeeper',
                repo: 'blog',
                clientId: secret.clientId,
                clientSecret: secret.clientSecret,
                autoCreateIssue: true,
                locale: 'zh'
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': secret.ga
            }
        ],
        [
            '@vuepress/medium-zoom',
            {
                selector: 'img',
                options: {
                    margin: 16,
                }
            }
        ],
        [
          '@vuepress-reco/vuepress-plugin-bgm-player',
            {
                audios:[
                    {
                        name: '光辉岁月',
                        artist: 'Beyond',
                        url: 'https://image.sherrykeeper.vip/guanghuisuiyue.mp3',
                        cover: 'https://image.sherrykeeper.vip/m-1.jpg'
                    },
                    {
                        name:'七里香',
                        artist: '周杰伦',
                        url: 'https://image.sherrykeeper.vip/m-2.mp3',
                        cover:'https://image.sherrykeeper.vip/p-2.jpg'
                    },
                    {
                        name:'晴天',
                        artist: '周杰伦',
                        url: 'https://image.sherrykeeper.vip/m-3.mp3',
                        cover:'https://image.sherrykeeper.vip/p-3.jpg'
                    },
                    {
                        name:'甜甜的',
                        artist: '周杰伦',
                        url: 'https://image.sherrykeeper.vip/m-4.mp3',
                        cover:'https://image.sherrykeeper.vip/p-4.jpg'
                    },
                    {
                        name:'成都',
                        artist: '赵雷',
                        url: 'https://image.sherrykeeper.vip/m-5.mp3',
                        cover:'https://image.sherrykeeper.vip/p-5.jpg'
                    },
                    {
                        name:'奉陪',
                        artist: '于文文',
                        url: 'https://image.sherrykeeper.vip/m-6.mp3',
                        cover:'https://image.sherrykeeper.vip/p-6.jpg'
                    }
                ]
            }
        ],
        [
            'social-share',
            {
                networks:['email', 'qq' ,'douban','weibo'],
                email:'zk1575595743@163.com'
            }
        ],
    ],
    themeConfig: {                              // 主题的配置信息
        lastUpdated: '上次更新',
        displayAllHeaders: true,                // 显示所有页面的标签链接，默认值：false
        search: true,
        searchMaxSuggestoins: 10,
        logo: '/image/photo.jpg',
        author: '张珂',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,                     // 嵌套标题的最大深度，能够匹配到一级，二级，三级标题。
        editLinks: true,
        smoothScroll: true
    }
};


// <Vssue />