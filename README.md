项目启动前，请在根目录下自建 .env.devlopment 文件，否则项目将无法运行，截止到第一次提交的时刻，有以下内容:
之后可能会加入一些加密秘钥或者密码之类的，和我正式使用的密码有相似之处，故以后不再在此(readme.md)说明更新后的 .env.devlopment 文件内容，也不提交新的 .env.devlopment 文件，如有需要此文件或使用到的所有key，请在 issues 中留言并留下你的联系方式。
```sh
# 【开发环境】
NODE_ENV = development

# 自定义变量需要以 VITE_ 开头
# base api
VITE_APP_BASE_API = 'http://localhost:3000'

# request.ts ，axios请求超时时间，毫秒
VITE_APP_TIMEOUT = 12000

# 登录所得 token 在缓存中的键
VITE_TOKEN_KEY = 'xiaojie-api-web-token'

# 登录时的时间戳在缓存中的键，用于前端判断 token 过期
VITE_TOKEN_TIMESTAMP_KEY = 'xiaojie-api-web-token'

# token 前端超时时间,7*24*60*60,秒
VITE_TOKEN_TIMEOUT = 604800
```


# xiaojie-api-web

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
