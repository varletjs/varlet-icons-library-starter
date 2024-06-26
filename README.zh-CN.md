<a href="https://github.com/varletjs/varlet-icons-library-starter/blob/main/README.md">English</a> |
<span>中文</span>

### 介绍

一个构建图标库的启动模板。

### 特性

- 📦 支持 svg 转换为 vue3、react 组件和 esm、cjs 模块
- 📦 支持 svg 转换为 web 字体
- 📦 支持图标预览站点
- 📦 支持从 figma 设计文件中获取所有 svg 文件
- 📦 提供发布相关工具，支持 npm、github 发布和变更日志生成

### 预览站点

https://varletjs.github.io/varlet-icons-library-starter

### 图标使用

#### 字体图标

```js
import '<packageName>/svg-fonts/css/i-icons.css'
```

```html
<i class="i i-account-circle-outline"></i>
<i class="i i-account-circle-outline" style="color: red; font-size: 30px"></i>
```

#### Vue 组件

```html
<script setup>
import { XIcon, AccountCircleOutline } from '<packageName>'
</script>

<template>
  <x-icon>
    <account-circle-outline />
  </x-icon>
   
  <x-icon color="red" :size="30">
    <account-circle-outline />
  </x-icon>
</template>
```

#### React 组件

```jsx
import { XIcon, AccountCircleOutline } from '<packageName>'

function Demo() {
  return <>
    <XIcon>
      <AccountCircleOutline />
    </XIcon>
   
    <XIcon color="red" size={30}>
      <AccountCircleOutline />
    </XIcon>
  </>
}
```

### 框架支持

我们支持 Vue3 和 React，默认将组件编译为 Vue3。如果要生成 React 组件，请参考以下配置。

```diff
// vi.config.ts
import { defineConfig } from '@varlet/icon-builder'

export default defineConfig({
  name: 'i-icons',
  namespace: 'i',
  fontFamilyClassName: 'i',
  output: './svg-fonts'
+ generate: {
+   framework: 'react'
+ }  
})
```

### 从 figma 文档获取 svg 图标

我们支持从 figma 文档中获取 svg 图标，具体实现步骤如下

#### 步骤一

创建一个 figma 文档，将 svg 图标库的页面名称设置为 `Icons`，并获取到文件 id。

<img src="https://cdn.jsdelivr.net/gh/varletjs/varlet-icons-library-starter/static/figma.png" />

#### 步骤二

获取 figma 文档的访问 token。

[见这里](https://www.figma.com/developers/api#authentication)

#### 步骤三

设置 token 和 file id 到脚本中。(为了 token 的安全性，更推荐将 token 设置到 ci 环境变量中)。

```diff
// package.json
"scripts": {
- "icons:figma": "VI_FIGMA_TOKEN=123456 vi figma -f 123456",
+ "icons:figma": "VI_FIGMA_TOKEN=<token> vi figma -f <fileId>",
}
```

### 核心命令

#### 启动图标预览站点开发环境

```
pnpm dev
```

#### 构建图标预览站点

```
pnpm build
```

#### 启动图标预览站点预览模式

```
pnpm preview
```

#### 构建图标 web 字体

```
pnpm icons:build
```

#### 生成图标组件和 esm、cjs 模块

```
pnpm icons:generate
```

#### 从 figma 文件获取所有 svg 文件

```
pnpm icons:figma
```

#### 发布图标库

```
pnpm release
```

### 配置相关

[见这里](https://github.com/varletjs/varlet-iconx/blob/main/packages/varlet-icon-builder/README.md#configuration-type-declaration)

### 反馈和交流

我们推荐使用 [issue](https://github.com/varletjs/varlet-icons-library-starter/issues) 列表进行最直接有效的反馈，也可以下面的方式

* 微信

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/community.png" />

* 加入 [Discord](https://discord.gg/Dmb8ydBHkw) 社区交流

### 感谢贡献者们做出的努力

<a href="https://github.com/varletjs/varlet-icons-library-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet-icons-library-starter" />
</a>

### 感谢以下赞助者

<a href="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
  <img src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
</a>

### 赞助本项目

赞助本项目，支持我们更好的创作。推荐使用爱发电进行订阅，您的头像将出现在本项目中。

#### 爱发电

<a href="https://afdian.net/a/haoziqaq">https://afdian.net/a/haoziqaq</a>

#### 微信 / 支付宝

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/wechat.jpg" />
<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/alipay.jpg" />