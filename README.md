# miniMall

> 这是一个使用 Vue2.0， 仿 爱范儿-玩物店 的webapp，仅为个人学习练手，所有数据都来自 爱范儿-玩物店


## 技术栈
- Vue2
- vue-router
- Vux
- axios
- LESS

## Todo
- [x] 首页
- [x] 商品列表页
- [X] 商品详细页
- [ ] 搜索
- [ ] 购物车
- [ ] 体验优化
- [ ] 使用 LeanCloud 实现登录注册(是否可行)？

### 购物车需求分析
- 显示商品的文字描述、图片描述、规格类型信息；
- 改变商品规格类型的时候图片切换；
- 改变商品规格类型的时候价格变化；
- 加入/移除购物车；
- 点击马上购买跳转到购物车列表页
- 购物车中商品数量统计以及总价的统计；

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
