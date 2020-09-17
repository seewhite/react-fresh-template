# 项目开发须知

## 框架开发主要依赖

* Webpack4.x
* React v16.x react-rouer-dom
* react-refresh
* Less
* Babel v7.x
* zustand axios
* Ant Design G2 Plot

## 开发建议

* 建议使用纯 Function 配合 Hooks 方式编写组件
* 本项目开启 CSS Module 配合 Less
* 公共请求方法已封装为 useFetch

## 项目文件目录

**主要文件都在 /src 文件夹下，这点通识。**

|文件夹|描述|
|:-:|:-:|
|api|放置项目请求api|
|assets|静态文件，如：某些图片|
|components|公共组件|
|public|项目配置文件，不会被打包|
|routers|页面路由配置|
|styles|公共样式|
|utils|公共方法|
|views|页面文件|

## 命名格式

* 文件命名：驼峰
* 变量命名
  * 局部变量：驼峰
  * 全局变量：大写命名+双下划线
  * 文件命名：驼峰
  * 样式命名：中划线+下划线

## 注意事项

* 不得手动更改 package.json 文件
* 开发时需开启 Eslint 语法检测
* 提交代码前确认无 Eslint 警告甚至错误
* 采取一 Tab 两空格的缩进方式
* 不建议使用如 Prettier 等的全局格式化插件
