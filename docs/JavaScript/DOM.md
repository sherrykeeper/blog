## DOM
JavaScript操作网页的接口，全称为"文档对象模型"(Documenet Object Model)

基本概念： 文档、 元素、 结点

- 整个文档是一个文档结点
- 每个标签是一个元素结点
- 包含在元素中的文本是文本结点
- 每个属性是一个属性结点
- 注释属于注释结点

所有的网络交互都依赖于这种DOM技术，DOM是一棵树，树枝和树叶都做了编号，通过脚本的函数去寻找那一个枝干的那一个叶子，对这个叶子做什么改变。

![](http://image.sherrykeeper.vip/DOM-test1-2020-1-13.png)

形如一颗倒长的树，很容易表明家族成员之间的关系，把复杂的关系简明的标识出来，因此这种模型非常适合表示一份HTML文档。

![](http://image.sherrykeeper.vip/DOM-test2-2020-1-13.png)

<Vssue :options="{ locale: 'zh' }"/>