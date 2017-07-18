# miniMall

> 这是一个使用 Vue2.0， 仿 爱范儿-玩物店 的webapp，仅为个人学习练手，所有数据都来自 爱范儿-玩物店


## 技术栈
- Vue2
- vue-router
- Vuex
- axios
- Vux
- LESS

## Todo
- [x] 首页
- [x] 商品列表页
- [X] 商品详细页
- [ ] 搜索
- [ ] 购物车...
- [ ] 体验优化
- [ ] 使用 LeanCloud 实现登录注册(是否可行)？

### 购物车需求
- [x] 加入/移除购物车
- [x] 显示商品的文字描述、图片描述、规格类型信息
- [ ] 改变商品规格类型的时候图片切换
- [ ] 改变商品规格类型的时候价格变化
- [ ] 点击马上购买跳转到购物车列表页
- [ ] 购物车中商品数量统计以及总价的统计

### 加入购物车需解决Bug
- 选择商品规格：selected class
- 未选择规格点击提交时的提示
- 同一件商品第二次加入购物车后，该商品的数量没有变化
- 同一件商品不同规格加入购物车后，没有显示（应该是判断的不正确）
- 没有勾选的商品，价格不计入总价

### vuex参考实例
- [vuejs-firebase-shopping-cart](https://github.com/ittus/vuejs-firebase-shopping-cart)

## 资料
- [webpack 配置文件中文注释](http://www.qdfuns.com/notes/40585/9e2cd48b5ef2c1fc14118eabe67d11bc.html)
- [vue-cli#2.0 webpack 配置分析](https://juejin.im/post/584e48b2ac502e006c74a120)

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
