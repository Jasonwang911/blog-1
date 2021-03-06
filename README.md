## demo说明

写这个demo的意图是为了分享给群里好友做个示例,因为经常看到大家问相同的问题，不到一天写完的，质量比较粗糙，还往大家多多原谅。数据库使用的是Mysql，文件已经导出了.

## 如何启动
### 开发调试
> 推荐使用`yarn`

`npm install` 安装依赖,`npm run start`启动客户端 http://localhost:3000,`npm run server`启动服务端 http://localhost:5000

### 打包
`npm run build`(此时得停止服务端的服务), 然后 `npm run server`, 就可以在http://localhost:5000 查看了

> 打包后就可以部署到服务器了,但是本demo比较简单,部署没有实际意义

## 一期说明
使用到的框架以及库

### 前端
> 前端使用es6模块规范
1. React
2. ant design
3. moment
4. isomorphic-unfetch (fetch兼容库)
5. create-react-app

### 服务端
> 服务端使用CommonJs规范
1. moment
2. express
3. express-session
4. mysql
5. express-mysql-session
6. passport
7. isomorphic-unfetch (fetch兼容库)
9. cors
10. excel-export
11. md5
11. passport-local
12. uuid

### 波折
本来打算一期就开始做基于Next.js的React SSR，但是有个大问题没有解决，问题在github的issue里面发现了，但是也没人解决，并且我也提了issue。临时换成了不做SSR。后续解决了再走版本迭代完成。

## 一期完成功能
- [x] 博客列表展示
- [x] 博客点赞
- [x] 查看博客详情
- [x] 关于我们页面
- [x] 联系页面
- [x] 后台管理系统登录
- [x] 后台管理系统接口鉴权
- [x] 基于passport的鉴权
- [x] session保留会话
- [x] 后台新增、修改博客文章
- [x] 后台软删除博客文章
- [x] 后台禁用、启用用户和分类
- [x] 后台导出所有的文章信息到excel

## 二期计划完成功能
- [ ] 整理服务端代码(一期功能简单,所有没有分开)
- [ ] 加入Redux或者Mobx作为状态管理
- [ ] 首页弹窗评论文章
- [ ] 详情页面展示所有评论
- [ ] 详情页面增加评论(支持markdown)
- [ ] 增加注册功能
- [ ] 增加退出功能 (一期其实服务端已经写好了)
- [ ] 后台管理新增、编辑文章支持markdown和富文本
- [ ] 导出用户信息、导出分类信息

## 三期计划
- [ ] 增加权限处理,根据角色来设置菜单权限和数据权限(一期没有设置任何权限)
- [ ] 增加头像以及头像处理功能(前端图片裁切)
- [ ] 希望能解决Next.js的问题，或者采用其他方式实现SSR

## 四期计划
- [ ] 前端从React切换到Angular5
- [ ] 服务端从express切换到Koa2
- [ ] 切换样式库到Material UI