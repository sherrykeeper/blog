(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{580:function(t,s,e){"use strict";e.r(s);var a=e(4),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"本地仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库"}},[t._v("#")]),t._v(" 本地仓库")]),t._v(" "),e("h3",{attrs:{id:"git-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" Git Commit")]),t._v(" "),e("p",[t._v("Git 仓库中的提交记录保存的是你的目录下所有文件的快照，就像是把整个目录复制，然后再粘贴一样，但比复制粘贴优雅许多！")]),t._v(" "),e("p",[t._v("Git 希望提交记录尽可能地轻量，因此在你每次进行提交时，它并不会盲目地复制整个目录。条件允许的情况下，它会将当前版本与仓库中的上一个版本进行对比，并把所有的差异打包到一起作为一个提交记录。")]),t._v(" "),e("p",[t._v("Git 还保存了提交的历史记录。这也是为什么大多数提交记录的上面都有父节点的原因 —— 我们会在图示中用箭头来表示这种关系。对于项目组的成员来说，维护提交历史对大家都有好处。")]),t._v(" "),e("p",[t._v("关于提交记录太深入的东西咱们就不再继续探讨了，现在你可以把提交记录看作是项目的快照。提交记录非常轻量，可以快速地在这些提交记录之间切换！")]),t._v(" "),e("h3",{attrs:{id:"git-branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" Git Branch")]),t._v(" "),e("p",[t._v("Git 的分支也非常轻量。它们只是简单地指向某个提交纪录 —— 仅此而已。所以许多 Git 爱好者传颂：")]),t._v(" "),e("p",[e("code",[t._v("早建分支！多用分支！")])]),t._v(" "),e("p",[t._v("这是因为即使创建再多的分支也不会造成储存或内存上的开销，并且按逻辑分解工作到不同的分支要比维护那些特别臃肿的分支简单多了。")]),t._v(" "),e("p",[t._v("在将分支和提交记录结合起来后，我们会看到两者如何协作。现在只要记住使用分支其实就相当于在说：“我想基于这个提交以及它所有的父提交进行新的工作。”")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch dev1             // 新建 dev1 分支\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev1           // 切换到 dev1 分支\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev2        // 新建一个名叫 dev2 的分支, 并且切换过去\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"git-merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[t._v("#")]),t._v(" Git Merge")]),t._v(" "),e("p",[t._v("合并分支的第一种方法.")]),t._v(" "),e("p",[t._v("在 Git 中合并两个分支时会产生一个特殊的提交记录，它有两个父节点。翻译成自然语言相当于：“我要把这两个父节点本身及它们所有的祖先都包含进来。”")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("举个例子")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://src.sherrykeeper.vip//md/md_194.png",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("main")]),t._v(" 现在指向了一个拥有两个父节点的提交记录。假如从 "),e("code",[t._v("main")]),t._v(" 开始沿着箭头向上看，在到达起点的路上会经过所有的提交记录。这意味着 "),e("code",[t._v("main")]),t._v(" 包含了对代码库的所有修改。")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("要被合并的分支"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         // 将要被合并的分支  合并到 当前分支中\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" Git Rebase")]),t._v(" "),e("p",[t._v("合并分支的第二种方法.")]),t._v(" "),e("p",[t._v("Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。")]),t._v(" "),e("p",[t._v("Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("要复制到哪个分支"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("举个例子")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://src.sherrykeeper.vip//md/md_196.png",alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),e("p",[t._v("远程仓库并不复杂, 在如今的云计算盛行的世界很容易把远程仓库想象成一个富有魔力的东西, 但实际上它们只是你的仓库在另个一台计算机上的拷贝。你可以通过因特网与这台计算机通信 —— 也就是增加或是获取提交记录")]),t._v(" "),e("p",[t._v("话虽如此, 远程仓库却有一系列强大的特性")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("首先也是最重要的的点, 远程仓库是一个强大的备份。本地仓库也有恢复文件到指定版本的能力, 但所有的信息都是保存在本地的。有了远程仓库以后，即使丢失了本地所有数据, 你仍可以通过远程仓库拿回你丢失的数据。")])]),t._v(" "),e("li",[e("p",[t._v("还有就是, 远程让代码社交化了! 既然你的项目被托管到别的地方了, 你的朋友可以更容易地为你的项目做贡献(或者拉取最新的变更)")])])]),t._v(" "),e("p",[t._v("现在用网站来对远程仓库进行可视化操作变得越发流行了(像 "),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://www.phacility.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Phabricator"),e("OutboundLink")],1),t._v(", 但远程仓库永远是这些工具的顶梁柱, 因此理解其概念非常的重要!")]),t._v(" "),e("h3",{attrs:{id:"git-clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" Git Clone")]),t._v(" "),e("p",[t._v("当你用 "),e("code",[t._v("git clone")]),t._v(" 某个仓库时，Git 已经帮你把远程仓库的名称设置为 "),e("code",[t._v("origin")]),t._v(" 了")]),t._v(" "),e("h3",{attrs:{id:"git-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch"}},[t._v("#")]),t._v(" Git Fetch")]),t._v(" "),e("p",[t._v("从远程仓库获取数据, 将本地仓库中的远程分支更新成远程仓库相应分支最新的状态  "),e("code",[t._v("git fetch")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("提示")]),e("p",[e("code",[t._v("git fetch")]),t._v(" 并不会更改本地仓库的状态, 不会更新"),e("code",[t._v("main")]),t._v(" 分支, 也不会修改磁盘上的文件 !!!")]),t._v(" "),e("p",[e("code",[t._v("git fetch")]),t._v(" 可以理解为单纯的下载操作")])]),e("p",[e("code",[t._v("git fetch")]),t._v(" 完成了很重要的两步:")]),t._v(" "),e("ul",[e("li",[t._v("从远程仓库下载本地仓库缺失的提交记录")]),t._v(" "),e("li",[t._v("更新远程分支指针")])]),t._v(" "),e("h3",{attrs:{id:"git-pull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[t._v("#")]),t._v(" Git Pull")]),t._v(" "),e("p",[t._v("当远程分支中有新的提交时，你可以像合并本地分支那样来合并远程分支。")]),t._v(" "),e("p",[e("code",[t._v("git pull")]),t._v(" 等价于 "),e("code",[t._v("git fetch")]),t._v(" + "),e("code",[t._v("git merge")])]),t._v(" "),e("h3",{attrs:{id:"git-push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-push"}},[t._v("#")]),t._v(" Git Push")]),t._v(" "),e("p",[e("code",[t._v("git push")]),t._v(" 负责将你的变更上传到指定的远程仓库，并在远程仓库上合并你的新提交记录。一旦 "),e("code",[t._v("git push")]),t._v(" 完成, 你的朋友们就可以从这个远程仓库下载你分享的成果了！")]),t._v(" "),e("p",[t._v("Git 会强制你先合并远程最新的代码, 然后才能分享你的工作.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("解决本地仓库 与 远程仓库不同步")]),e("ol",[e("li",[t._v("git fetch 更新远程分支")]),t._v(" "),e("li",[t._v("git rebase 将我们的工作移动到最新的提交记录下")]),t._v(" "),e("li",[t._v("git push 推送至远程仓库")])]),t._v(" "),e("p",[t._v("或者")]),t._v(" "),e("p",[t._v("使用  "),e("code",[t._v("git pull --rebase")]),t._v(" 实现 (推荐!!!)")])]),e("h3",{attrs:{id:"解决-remote-rejected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-remote-rejected"}},[t._v("#")]),t._v(" 解决 Remote Rejected")]),t._v(" "),e("p",[t._v("如果你是在一个大的合作团队中工作, 很可能是master被锁定了, 需要一些Pull Request流程来合并修改。如果你直接提交(commit)到本地master, 然后试图推送(push)修改, 你将会收到这样类似的信息:\n"),e("code",[t._v("! [远程服务器拒绝] main -> main (TF402455: 不允许推送(push)这个分支; 你必须使用pull request来更新这个分支.)")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("为什么会被拒绝?")]),e("p",[t._v("远程服务器拒绝直接推送(push)提交到master, 因为策略配置要求 pull requests 来提交更新.")]),t._v(" "),e("p",[t._v("你应该按照流程,新建一个分支, 推送(push)这个分支并申请pull request,但是你忘记并直接提交给了master.现在你卡住并且无法推送你的更新.")])])])}),[],!1,null,null,null);s.default=v.exports}}]);