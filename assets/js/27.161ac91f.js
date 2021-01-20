(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{540:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"使用hexo搭建博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用hexo搭建博客"}},[s._v("#")]),s._v(" 使用hexo搭建博客")]),s._v(" "),a("h3",{attrs:{id:"第一步-安装hexo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-安装hexo"}},[s._v("#")]),s._v(" 第一步 - 安装hexo")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo-cli -g\nhexo init blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nhexo server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"第二步-安装其他主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-安装其他主题"}},[s._v("#")]),s._v(" 第二步 - 安装其他主题")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitclone.com/github.com/viosey/hexo-theme-material.git themes/material\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("主题安装完成后，删除默认主题文件夹——landscape")]),s._v(" "),a("p",[s._v("然后进入material文件夹中，删除.git文件（整个项目仅需要一个.git仓库）")]),s._v(" "),a("h2",{attrs:{id:"第三步-上传至gitee远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步-上传至gitee远程仓库"}},[s._v("#")]),s._v(" 第三步 - 上传至gitee远程仓库")]),s._v(" "),a("p",[s._v("首先在码云上建立hexo仓库；")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置gitee登录信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始本地化仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@gitee.com:sherrykeeper/hexo.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加hexo插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hexo-deployer-git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("更改_config.yml 设置，添加以下信息")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deployment")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Docs: https://hexo.io/docs/one-command-deployment")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//gitee.com/sherrykeeper/hexo.git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("使用 "),a("strong",[s._v("hexo.deploy")]),s._v(" 命令部署到gitee。")]),s._v(" "),a("p",[s._v("然后使用gitee page 部署到线上。")])])}),[],!1,null,null,null);t.default=n.exports}}]);