# my-blog-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 11 June

* 由纯 HTML、CSS文件变为使用 vue 框架搭建起来的项目
* 将 blogpage 划分为 blogHead、blogContent、blogFooter 三个组件
* 使用font-awesome库

## 12 June

1. 今天用了 font-awesome 这个库，分别在banner、 green-section 和 footer 中引用到了它的图标。很方便。

要说一点的是，在 green-section 中，在一个旋转的正方形中放入一个居中的图标折腾了好一会儿。这里用了 CSS3 中的 transform 属性中的 translate3d 和 rotate。移动是按自身的方向而不是父元素的，所以这里先移动再旋转和先旋转再移动的效果不一样！

2.使用 router，实现单页面切换

3.调整结构。把原来的 header 分为 nav 和 banner， nav 在每个页面固定在顶部，banner 则只在第一个界面出现。

在做这个工作的过程中出现了一个问题。blogPage 页面的顶部出现了一段空白区域。经调试后发现是 class 为 hr 的 div 中配置了 margin-top:20px。

这是因为元素不是 BFC 的情况下， 子元素的 margin-top 会和父元素的重合。这里写了个[小例子](https://jsfiddle.net/h6vzd6qc/3/).

这里将 inner 的 position 改为相对于父元素 banner 绝对定位，将其变为 BFC，这样就不会出现上面的问题。