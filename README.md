# tiga-components

[![NPM version](https://img.shields.io/npm/v/tiga-components.svg?style=flat)](https://npmjs.org/package/tiga-components)
[![NPM downloads](http://img.shields.io/npm/dm/tiga-components.svg?style=flat)](https://npmjs.org/package/tiga-components)


## 介绍
基于dimu搭建的react组件库


## 自动化部署
使用github自动化部署，参考dumi部署介绍
https://d.umijs.org/guide/faq#%E9%83%A8%E7%BD%B2%E6%96%87%E6%A1%A3

## 部署参考
https://juejin.cn/post/7260742402397569080

## 外部访问
https://wangluweb.github.io/tiga-components/

## 启动项目
``` bash
$ yarn

$ yarn start

```
# 目录

```bash
# 介绍
<root>
 docs 组件库文档目录
 index.md 组件库文档首页
 guide.md 组件库其他文档路由（示意）
 src 组件库源码目录
 Foo 单个组件
 index.tsx 组件源码
 index.md 组件文档
 index.ts 组件库入口文件
 .dumirc.ts dumi 的配置文件
 .fatherrc.ts father 的配置文件，用于组件库打包

```

# 发包
```bash
// 打包文件
$ yarn prepublishOnly
// 登录到npm
$ npm login

// 发包  发包前看下包名是否重复
$ npm publish


```


## LICENSE

MIT
