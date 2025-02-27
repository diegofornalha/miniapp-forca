# task 说明文档

通过配置 `tasks.json` 可实现 `taro` 等预编译小程序框架的自动化构建

## task 基础

> task 配置项可参考 [vscode task](https://code.visualstudio.com/docs/editor/tasks)

### RunOnOptions

IDE 中 `runOn` 配置在 `folderOpen` 外添加两种执行时机 `appletPreview` 和 `prodBuild`

| runOn         | 运行时机          | 执行任务             |
| ------------- | ---------------- | ------------------ |
| folderOpen    | 项目启动后         | 依赖安装            |
| appletPreview | 小程序预览构建前    | 开发服务, 持续 watch |
| prodBuild     | 小程序生产包构建前  | 构建生产小程序包      |

### 生产包构建

`手机预览`, `小程序上传`, `代码包导出` 等功能使用生产构建
为了不打断开发流程, 将 dev 和 prod 构建产物指定不同文件夹,
`project.config.json` 中 `miniprogramRoot` 配置开发构建目录, `miniprogramRootProd` 配置生产构建目录

> 例:

```js
// config/prod.js
export default {
    outputRoot: 'dist-prod'
  ...
}
// config/dev.js
export default {
  outputRoot: 'dist'
  ...
}
```

`project.config.json`

```json
{
    "miniprogramRoot": "dist",
    "miniprogramRootProd": "dist-prod"
}
```

# 常见问题

## nodejs/npm 相关

请先确保已安装 [node](https://nodejs.org/zh-cn/download) 执行环境, 如使用 `yarn` `cnpm` 等包管理工具还需检查相关工具是否已安装

## task 构建任务执行失败

依赖相关问题, 请尝试删除 `node_modules` 目录, 重新执行 `npm install`, 安装完成后点击编译按钮重新编译小程序.
