## 项目简介
一个WebApp版的cnode客户端，项目采用react技术栈构建。组件选用的是[Material-UI](http://www.material-ui.com/)，让界面更适合触控操作。
- 感谢来自[cnodejs论坛](https://cnodejs.org/)官方提供的api！

## 功能
- 首页列表，下拉时自动加载下一页，在顶端上拉刷新。
- 主题详情，登陆后能够收藏，评论和点赞。
- 消息提醒，能查看消息详情和清空所有未读消息
- 个人主页，包括最近参与，回复，以及收藏的主题
- 发表主题，成功后能跳转到相应主题页面
- 页面后退，能还原数据和滚动位置

## 运用的技术主要有:
- 采用react技术栈，通过Redux来管理页面状态，通过Router来设置页面路由
- 组件选用的是Material-UI，不再自己造轮子，既美观又能方便触控操作
- 使用react-flip-move插件来实现list的加载动画
- 修改react-pullrefresh插件，实现了首页上拉刷新效果
- 应用`isomorphic-fetch`库代替`XMLHttpRequest`实现网络请求
- 使用`PostCSS`对CSS进行预处理
- 通过`CSSModules`处理模块内部的类名

## 预览
[DEMO](https://lumia2046.github.io/cnode/)

## 运行项目
```
  git clone https://github.com/lumia2046/cnode.git
  cd cnode
  npm install webpack-dev-server webpack -g (没有安装webpack的需要安装)
  npm install
  npm start
```

## 生产项目
```
  npm run build(项目生成在./build/production)
```

## 状态树
本项目使用redux管理状态,状态树如图:
![截图](https://github.com/lumia2046/cnode/blob/master/stateTree/stateTree.png)  
基本思路是每个页面对应一个reducer,管理本页面的状态。其中:
- `homePage`对应主页信息，还包括了浏览的主题类别等状态
- `article`对应文章内容页面，能缓存多篇，所以状态信息中提供了当前正在阅读的主题信息
- `login`对应登陆账号的信息页面，包括是否登录成功等状态
- `profile`代表用户的信息页面，比如用户名，积分情况等，还包括发表、回复和收藏的主题
- `publishTopic`对应发表主题页面，包括主题是否发送成功等状态
- `message`对应登陆账号的消息界面，还包括了未读消息是否被标记已读等状态


## TODO
- 增加react-router过渡动画
- 优化页面性能

## 总结

- 对react组件及其生命周期有了更深入的了解
  - 如果需要在组件更新的生命周期里setState()，应该在componentWillReceiveProps(或者componentWillUpdate)里通过对this.props和newProps里面的属性做出准确判断后再去setState()，否则会导致组件更新死循环以致页面卡死
  - 在组件的生命周期里调用dispatch发送不带异步的action时，每发送一个action都会更新一次store。但是在事件回调的方法里多次调用dispatch发送不带异步的action时，只会在最后一个action发送完毕才更新一次store，想要每次action都更新store，那么必须手动将其封装为异步操作
  - 公共组件最好不要设置自己的状态，应该由父组件管理其状态

- 对es6有了更深入的了解
  - 当采用es5写法时，React 自动将组件绑定给所有的事件回调方法中的this，这种自动绑定的行为只适用于当组件是用 React.createClass 创建时。如果用 ES6 的类来定义组件，那么事件方法中 this 的值就是 undefined，除非你自己显式绑定它
  - 为了省略es6中事件方法的绑定，可以将事件方法写成箭头函数的形式，这种写法在react文档中标注为es7+，eg: 把handleClick(){}写成handleClick = () => {}即可,但是react生命周期函数不支es7+这种写法

- 对React技术栈有了深入的了解
  - react-router的history属性，当设置为browerHistory时，需要对服务器改造。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。
  - redux通过connect连接react组件，只有mapStateToProps里return的对象的属性发生改变，组件才会去更新。store中有的但是return的对象里不存在的属性改变时，组件不会去更新，因为这样没有意义

- 使用了模块化编程后，页面整体逻辑变得清晰很多，每个模块里的css和js都只负责管理一个对应的组件。尤其是用了css这一块，用css-loader开启CSS-Modules后，就再也不用为类名的语义化和重复去烦恼


