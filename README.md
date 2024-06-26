<span>English</span> |
<a href="https://github.com/varletjs/varlet-icons-library-starter/blob/main/README.zh-CN.md">中文</a>

### Intro

A starter template for building an icon library.

### Features

- 📦 Supports svg transform to vue3, react components and esm, cjs modules
- 📦 Supports svg conversion to web fonts
- 📦 Supports icon preview site
- 📦 Supports fetching all svg files from figma design file
- 📦 Provide release related tools, supports npm, github release and changelog generation

### Preview Site

https://varletjs.github.io/varlet-icons-library-starter

### Icons Usage

#### Web font icons

```js
import '<packageName>/svg-fonts/css/i-icons.css'
```

```html
<i class="i i-account-circle-outline"></i>
<i class="i i-account-circle-outline" style="color: red; font-size: 30px"></i>
```

#### Vue Component

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

#### React Component

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

### Framework Support

We support Vue3 and React, and compile components to Vue3 by default.
If you want to generate React components, refer to the following configuration.

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

### Get svg icons from figma documents

We support getting svg icons from figma documents. The specific implementation steps are as follows.

#### Step 1

Create a figma document with the page name Icons and get the file id.

<img src="https://github.com/varletjs/varlet-icons-library-starter/blob/main/static/figma.png?raw=true" />

#### Step 2

Get figma access token.

[See here](https://www.figma.com/developers/api#authentication)

#### Step 3

Set token and file id into script.(For the security of token, it is recommended to set the token to the ci environment variable)

```diff
// package.json
"scripts": {
- "icons:figma": "VI_FIGMA_TOKEN=123456 vi figma -f 123456",
+ "icons:figma": "VI_FIGMA_TOKEN=<token> vi figma -f <fileId>",
}
```

### Core Commands

#### Run icon preview site development

```
pnpm dev
```

#### Build icon preview site

```
pnpm build
```

#### Run icon preview site preview mode

```
pnpm preview
```

#### Build icon web fonts

```
pnpm icons:build
```

#### Generate icon component and esm, cjs modules

```
pnpm icons:generate
```

#### Fetch all svg files from figma file

```
pnpm icons:figma
```

#### Release icon library

```
pnpm release
```

### Configuration Reference

[See here](https://github.com/varletjs/varlet-iconx/blob/main/packages/varlet-icon-builder/README.md#configuration-type-declaration)

### Community

We recommend that [issue](https://github.com/varletjs/varlet-icons-library-starter/issues) be used for problem feedback, or others:

* Wechat group 

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/community.png" />

* Join the [Discord](https://discord.gg/Dmb8ydBHkw)

### Thanks to contributors

<a href="https://github.com/varletjs/varlet-icons-library-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet-icons-library-starter" />
</a>

### Thanks to the following sponsors

<a href="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
  <img src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
</a>

### Sponsor this project

Sponsor this project to support our better creation. It is recommended to use afdian to subscribe, and your avatar will appear in this project.

#### Afdian

<a href="https://afdian.net/a/haoziqaq">https://afdian.net/a/haoziqaq</a>

#### Wechat / Alipay

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/wechat.jpg" />
<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/alipay.jpg" />
