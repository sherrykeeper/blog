(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{567:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"defer-延迟执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defer-延迟执行"}},[t._v("#")]),t._v(" defer 延迟执行")]),t._v(" "),a("p",[t._v("当网页文档内容全部加载后，才解析执行js脚本。而不是遇到js代码块就执行。")]),t._v(" "),a("h2",{attrs:{id:"预编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译"}},[t._v("#")]),t._v(" 预编译")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<script>\nalert(a);       // 返回undefined\nvar a = 1;\nalert(a);\n<\/script>\n")])])]),a("p",[t._v("预编译实现了将变量声明提前到了所有代码之前，来进行执行。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" <script>\n    fun();\n    function fun() {\n        alert(1);\n    }\n<\/script>\n")])])]),a("p",[t._v("支持先调用，后定义函数。")]),t._v(" "),a("p",[t._v("一般在声明变量和函数时，会实现预编译提前（即支持先调用，后声明）。")]),t._v(" "),a("h2",{attrs:{id:"代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块"}},[t._v("#")]),t._v(" 代码块")]),t._v(" "),a("p",[t._v("js引擎执行脚本时，按照块来执行，浏览器在解析HTML文档流时，遇到script标签，js引擎会等到这个代码块都加载完，然后对这个代码段进行预编译，再执行，执行完毕后，再继续解析下面的HTML文档流。")]),t._v(" "),a("p",[t._v("所有代码块在一个文档中，同属于一个全局作用域，但是需要注意块之间的变量函数（代码块的解析是有先后顺序的）。")]),t._v(" "),a("h2",{attrs:{id:"响应事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应事件"}},[t._v("#")]),t._v(" 响应事件")]),t._v(" "),a("p",[t._v("js的操作通过 "),a("strong",[t._v("事件驱动")]),t._v(" 的模式实现")]),t._v(" "),a("p",[t._v("js的响应事件具有不确定性")]),t._v(" "),a("h3",{attrs:{id:"window-onload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-onload"}},[t._v("#")]),t._v(" "),a("strong",[t._v("window.onload")])]),t._v(" "),a("p",[t._v("在"),a("strong",[t._v("网页加载完毕")]),t._v("后立即执行的操作，即当HTML文档加载完毕后，立即执行某个方法。 通常用于<body>元素。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("window.onload = function(){\n\tfun1();\n\tfun2();\n}\n")])])]),a("h4",{attrs:{id:"为何使用window-onload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何使用window-onload"}},[t._v("#")]),t._v(" 为何使用window.onload()？")]),t._v(" "),a("p",[t._v("因为在js中的函数方法，需要在HTML文档渲染完毕后才可以使用，如果没有渲染完成，此时的"),a("RouterLink",{attrs:{to:"/JavaScript/DOM.html"}},[t._v("dom树")]),t._v("是不完整的，这时调用一些js代码可能会报错“undefined”。")],1),t._v(" "),a("h2",{attrs:{id:"动态脚本-document-write"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态脚本-document-write"}},[t._v("#")]),t._v(" 动态脚本-document.write()")]),t._v(" "),a("p",[t._v("document.write()运行原理：\ndocument.write()是js对document.open()所开启的文档流操作的API方法。")]),t._v(" "),a("ul",[a("li",[t._v("若文档流已经关闭，则document.write()会重新调用document.write()打开新的文档流并写入，此时原来的文档流就会被清空，已经渲染好的页面会被覆盖，浏览器会重新构建新的DOM并渲染新的页面")])]),t._v(" "),a("h3",{attrs:{id:"写入文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入文本"}},[t._v("#")]),t._v(" 写入文本")]),t._v(" "),a("p",[t._v("在页面加载时不会出问题")]),t._v(" "),a("h3",{attrs:{id:"写入脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入脚本"}},[t._v("#")]),t._v(" 写入脚本")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/wei_ke_zhi/article/details/82153778",target:"_blank",rel:"noopener noreferrer"}},[t._v("借鉴博客"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"http://image.zk123.top/%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC-1.PNG",alt:""}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("注意点1： 写入脚本时，这段脚本被拦腰截断。 浏览器将它解析成了以下代码\n\n<script>\n \ndocument.write('<script>alert(1)\n\n<\/script>\n\n');\n\n插入文本中的<\/script>被当成了第一个scrip的闭合标签，因此这段代码成了非法代码。 （浏览器的HTML解析会被js的加载所阻塞）\n解决方案：为<\/script>加上转移字符   <\\script>=><\\/script>\n")])])]),a("p",[t._v("插入脚本会导致整个页面先跳出弹窗，弹窗关闭后，才显示出原来的HTML文档。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://image.zk123.top/%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC-2.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"动态脚本的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态脚本的使用场景"}},[t._v("#")]),t._v(" 动态脚本的使用场景")]),t._v(" "),a("p",[t._v("1.加载需要配合js脚本使用的外部CSS文件")]),t._v(" "),a("p",[t._v("2.在新窗口中写入新的页面数据（新建一个页面不会重写之前的页面）")]),t._v(" "),a("h2",{attrs:{id:"使用控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用控制台"}},[t._v("#")]),t._v(" 使用控制台")]),t._v(" "),a("p",[t._v("console.log()")]),t._v(" "),a("ul",[a("li",[t._v("log(message) : 将一般消息输出到控制台")]),t._v(" "),a("li",[t._v("warn(message): 将警告信息输出到控制台")]),t._v(" "),a("li",[t._v("info(message) : 将信息性消息输出到控制台")]),t._v(" "),a("li",[t._v("error(message) : 将错误消息输出到控制台")])]),t._v(" "),a("h2",{attrs:{id:"处理异常-try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理异常-try-catch"}},[t._v("#")]),t._v(" 处理异常(try-catch)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("try{\n\t// 可能出错的代码\n}catch(error){\n\t// 在发生错误时怎么处理\n}\n")])])]),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("实例：\n<script>\ntry{\n    a+b;\n}catch (e) {\n    alert(e.message);\t// 通过.message方法，可以获取错误的详细信息\n}\n<\/script>\n")])])]),a("ul",[a("li",[t._v("message  弹出错误信息\t(a is not defined)")]),t._v(" "),a("li",[t._v("description 弹出错误消息 (undefined)")]),t._v(" "),a("li",[t._v("name 弹出错误名称 (ReferenceError)")])]),t._v(" "),a("h3",{attrs:{id:"finally属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finally属性"}},[t._v("#")]),t._v(" finally属性")]),t._v(" "),a("p",[t._v("finally 是try-catch处理异常结构中的最后一个部分，也是一定会执行的部分。")]),t._v(" "),a("h2",{attrs:{id:"字符编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[t._v("#")]),t._v(" 字符编码")]),t._v(" "),a("p",[t._v("js支持Unicode编码。即可以使用中文作为变量和该函数的名字。")]),t._v(" "),a("h2",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("表示空值，不存在")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("未定义，声明了变量但没有赋值时会显示该值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("布尔值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对象")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("typeof function(){}     // 类型：function\ntypeof null             // 类型：object\ntypeof {}               // 类型：object\ntypeod []               // 类型：object\ntypeof undefined        // 类型：undefined\n")])])]),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" number")]),t._v(" "),a("p",[t._v("number 分为整型数值int、 浮点型数值float")]),t._v(" "),a("h4",{attrs:{id:"int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int"}},[t._v("#")]),t._v(" int")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("进制")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("前缀")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("十六进制")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0x")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("八进制")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("var num1 = 0x1F4        // f 不区分大小写\nvar num2 = 0111;        // 73\n")])])]),a("h4",{attrs:{id:"float"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float"}},[t._v("#")]),t._v(" float")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("浮点数能够使用科学计数法表示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" var float = 1.2e3;          // float = 1200\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"运算函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算函数"}},[t._v("#")]),t._v(" 运算函数")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("Math.floor() 剔除小数位，只取整数")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (Math中的M必须大写)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出： 2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("Math.round() 四舍五入")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出： 5")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),a("h4",{attrs:{id:"设置数字显示的位数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置数字显示的位数"}},[t._v("#")]),t._v(" 设置数字显示的位数")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("toFixed(a)      保留小数点后a位数")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 10.00")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("toExponential(a)  保留小数点后a位有效数字的科学计数法表示方式")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toExponential")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回1.23e +8")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),a("h4",{attrs:{id:"转化成数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转化成数字"}},[t._v("#")]),t._v(" 转化成数字")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("parseInt()   逐个转化，遇到不能够转化的字符则停止转化，若第一个字符不能转化，则直接返回NaN")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数字123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.73"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数字1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明进制为2进制，把2进制的123转化为10进制的整数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数是十进制的值，包含0前缀时。 为了避免误解成八进制的数字，应指定第二个参数 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"010"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("parseFloat()     在parseInt()的基础上能够识别小数点")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数字1.23")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("使用乘法，实现快速转换")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 返回字符串"11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数值2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),a("h4",{attrs:{id:"转化成布尔值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转化成布尔值"}},[t._v("#")]),t._v(" 转化成布尔值")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("使用 !!  强制转化成布尔值")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("使用Boolean()构造函数转换")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回true")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回boolean")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])]),a("h4",{attrs:{id:"加法运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加法运算"}},[t._v("#")]),t._v(" 加法运算")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN与任何值相加都返回NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Infinity(无穷大)        ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -Infinity (负无穷大 )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (-Infinity)+Infinity = NaN;      负无穷大和正无穷大相加返回NaN")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"减法运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减法运算"}},[t._v("#")]),t._v(" 减法运算")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特殊")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);