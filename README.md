# typescript_study

![学习笔记](https://img.shields.io/badge/类型-学习笔记-2f6fdb)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x%20%7C%205.x-3178C6)
![React](https://img.shields.io/badge/React-17.0.1-61DAFB)

个人的 **React** 与 **TypeScript** 学习记录。按主题、日期拆成多个互不依赖的目录，方便在不同电脑之间同步笔记。根目录没有统一的安装或启动脚本，每个子目录单独看、单独跑。

仓库里的图片只有 Create React App 自带的 logo，没有功能截图。各 React 子目录里的 `README.md` 仍是脚手架默认说明，以本文件为准。

## 内容一览

| 目录 | 是什么 | 怎么看 |
| --- | --- | --- |
| [`TypeScript学习`](./TypeScript学习) | 按章节写的入门笔记，部分 `.ts` 旁有编译出的 `.js` | 直接读源码；单文件可用 `tsc` 编译 |
| [`TypeScript官方`](./TypeScript官方) | 对照官方手册的基础类型、接口、类、函数、泛型 | 直接读源码 |
| [`TypeScript练习`](./TypeScript练习) | 用户 / 管理员联合类型练习，写到类型谓词和过滤 | 单文件编译后用 Node 运行 |
| [`typescript2024`](./typescript2024) | 2024 年的三则短例：对象类型、泛型接口、结构化类型 | `tsc`，已有 `dist/` |
| [`ts_20240921`](./ts_20240921) | 基础类型、泛型、类、条件类型，以及 ES Module / CommonJS | `tsc`，输出到 `build/` |
| [`ts_20241107`](./ts_20241107) | 最小模块示例，并生成 `.d.ts` | `tsc`，输出到 `dist/` 与 `types/` |
| [`ES_2020`](./ES_2020) | 可选链、空值合并、解构、`Object.assign` | `node` 直接运行 |
| [`my-app`](./my-app) | React 17 笔记：井字棋、主要概念，以及一份旧式路由入口 | `npm start`（见下方限制） |
| [`react_study_1.7`](./react_study_1.7) | 生命周期、ref、高阶组件，以及 Redux / react-redux 主题切换 | `npm start` |
| [`hook_study`](./hook_study) | Context、`useState` / `useEffect`、react-hook-form、路由守卫草稿 | `npm start` |
| [`antd-demo-ts`](./antd-demo-ts) | TypeScript + Ant Design 4 的评论框草稿 | 本环境未能安装成功 |
| [`test-demo`](./test-demo) | Create React App + TypeScript 模板，`App.tsx` 未写完 | 当前代码无法通过编译 |
| [`1.6 react学习`](./1.6%20react学习) | 两份原生 HTML：点赞按钮，以及用 class 模拟组件 | 浏览器直接打开 |
| 根目录 `1.html`、`test.js` | CSS `box-shadow` 示例；闭包练习 | 浏览器打开 / `node test.js` |

## 技术栈

版本取自各目录的 `package.json`（`^` 表示声明的范围）。仓库不提交 `node_modules`。

| 用途 | 依赖 | 声明版本 |
| --- | --- | --- |
| 语言 | TypeScript | `typescript2024` `^5.3.3`（锁文件解析为 5.3.3）；`ts_20240921` `^5.6.2`；`ts_20241107` `^5.6.3`；`antd-demo-ts`、`test-demo` `^4.0.3` |
| UI | React / React DOM | `^17.0.1` |
| 脚手架 | react-scripts | `4.0.1` |
| 路由 | react-router-dom | `^5.2.0`（`my-app`、`hook_study`） |
| 状态 | redux、react-redux | `^4.0.5`、`^7.2.2`（`react_study_1.7`） |
| 表单 | react-hook-form | `^6.14.1`（`hook_study`） |
| 组件库 | antd、@craco/craco、craco-less | `^4.10.0`、`^6.0.0`、`^1.17.1` |
| 样式 | node-sass | `4.14.1`（仅 `antd-demo-ts`） |
| 类型 | @types/node、@types/jquery | `^22.5.5`（`ts_20240921`）、`^3.5.5`（`TypeScript学习`） |

根目录 `package.json` 的 `dependencies` 是空的。`TypeScript学习` 与 `TypeScript官方` 的 `tsconfig.json` 是空文件，没有共享编译配置。

## 目录结构

```text
.
├── TypeScript学习/          # 1–11 章入门笔记
├── TypeScript官方/          # 手册笔记（有 1–5、7，没有第 6 章目录）
├── TypeScript练习/          # 5 组类型练习
├── typescript2024/          # src/demo1.ts … demo3.ts，输出 dist/
├── ts_20240921/             # 2024-09-21 的类型与模块笔记，输出 build/
├── ts_20241107/             # 2024-11-07 的模块与声明文件，输出 dist/、types/
├── ES_2020/                 # 三份可直接运行的 JS
├── my-app/                  # 井字棋与「主要概念」笔记
├── react_study_1.7/         # 第二阶段生命周期、第三阶段高阶组件与 Redux
├── hook_study/
├── antd-demo-ts/            # CommentApp / CommentInput / CommentList
├── test-demo/
├── 1.6 react学习/           # 两份静态 HTML
├── 1.html
└── test.js
```

### TypeScript 笔记里有什么

`TypeScript学习`：Hello World、原始类型、`any`、类型推论、联合类型、接口、数组、函数类型（可选 / 默认 / 剩余参数）、类型断言、声明与枚举、类。第 11 章构造函数里参数名和赋值不一致，按笔记草稿阅读即可。

`TypeScript官方`：基础类型（含元组、枚举、`unknown`）、接口继承、类继承、函数参数与剩余参数、泛型。`2.变量声明/1.ts` 和 `5.函数/3.this.ts` 是空文件；`5.函数/test.js` 用一份牌堆对象演示 `this`。

`TypeScript练习`：从 `User` 接口开始，经过 `User | Admin`、可辨识联合，到 `isAdmin` / `isUser` 类型谓词和 `filterUsers`。`1/1.test.ts` 的导入路径写成了 `../exercise1`，与同目录的 `exercise1.ts` 对不上。

`ts_20240921`：`base_ts.ts`、`base_ts1.ts`、`base_ts2.ts`、`base_ts3.ts` 覆盖接口、泛型约束、类和条件类型；`moduleA.ts` / `moduleB.ts` 是 ES Module；`commonjsA.ts` / `commonjsB.ts` 是 CommonJS。当前 `tsconfig.json` 的 `module` 是 `commonjs`，`outDir` 是 `build`。这些笔记里留有重复函数实现和对 `__proto__` 的访问，整目录 `tsc --noEmit` 不会通过，编译器仍会写出 JS。

`typescript2024` 的 `tsconfig.json` 打开了 `strict`，`module` 为 `ES2022`，`outDir` 为 `dist`。`ts_20241107` 打开了 `declaration`，声明文件输出到 `types/`。

### React 笔记里有什么

当前真正被开发服务器加载的只有各自的 `src/index.js`（或 `index.tsx`）。同目录里的其他文件是独立草稿，改文件名或自行换成入口后才会出现在页面上。

- `my-app/src/0.井字棋`：井字棋。`src/1.主要概念`：JSX、组件、生命周期时钟、事件、条件渲染、列表、表单、摄氏 / 华氏温度转换、组合。入口 `src/index.js` 用 `create-react-class` 写了 About / Inbox 路由，并把 React 渲染到 `document.body`。
- `react_study_1.7`：入口用 Redux 保存 `themeColor`，页面标题为「React.js 小书」，可切换红 / 蓝。`src/第二阶段` 是生命周期、ref、`props.children`、`dangerouslySetInnerHTML`。`src/第三阶段` 是高阶组件、一份手写 `createStore`（`手写redux.js`）和 react-redux 示例。
- `hook_study`：入口是 `useContext` 主题按钮。同目录还有 `useState` / `useEffect`、Portal（`createPoetal.js`）和带登录重定向的 react-router 草稿。
- `antd-demo-ts`：`CommentApp` 收集评论并交给 `CommentList` 渲染，样式在 `src/scss`。`App.tsx` 引入了 antd 的 `Button`，页面上没有使用它。`craco.config.js` 用 `craco-less` 把 antd 主色设为 `#1DA57A`。
- `test-demo/src/App.tsx`：给按钮 props 写了类型，函数组件没有返回值，参数也没有注解。

## 环境要求

- 直接运行 `.js`、编译 TypeScript：Node.js 18 及以上即可。下面的 Node 脚本在 **Node.js v22.23.4** 上验证过。
- 五个 Create React App 项目使用 **react-scripts 4.0.1**。请使用 **Node.js 16**（验证时为 v16.20.2）。在 Node.js 22 上启动 `hook_study` 时，webpack 4 依赖的 postcss 会报 `ERR_PACKAGE_PATH_NOT_EXPORTED`（`postcss/lib/tokenize`）。
- `antd-demo-ts` 额外依赖 `node-sass@4.14.1`。该版本不提供 Node 16 的预编译包，源码编译需要 Python。本环境没有 Python，安装没有完成。
- 包管理器：这些子项目带有 `package-lock.json` 或 `yarn.lock`。本环境的 npm 为 8.19.4（随 Node 16）和 10.9.9（随 Node 22）。

## 安装与运行

在对应子目录中执行。下面标了「已验证」的命令，是在本环境实际跑通的。

### 根目录与 ES2020

```bash
node test.js
# 已验证，输出 8

node ES_2020/1.js
node ES_2020/3_assign.js
```

`ES_2020/1.js` 已验证，会打印空字符串、`undefined`、`2` 和空字符串（`||` 与 `??` 的差别）。`ES_2020/2_解构赋值.js` 对 `null` 做数组解构，运行会抛出 `TypeError: null is not iterable`。

`1.html` 与 `1.6 react学习/*.html` 用浏览器打开即可，不需要安装依赖。本环境没有对静态页做浏览器点击验证。

### TypeScript

`ts_20241107`（已验证：工作区里已有依赖，`npx tsc --noEmit` 通过；编译后的 `dist/index.js` 可以被 Node 加载，入口只做重新导出，没有控制台输出）：

```bash
cd ts_20241107
npm install
npx tsc --noEmit
npx tsc
node dist/index.js
```

`ts_20240921`（已验证：本地 TypeScript 5.6.2。`npx tsc --noEmit` 失败，报重复函数实现，以及 `number[]` 上不存在 `__proto__`。不带 `--noEmit` 时仍会按当前 `commonjs` 配置写出 `build/`，其中 `node build/moduleA.js` 打印 `3.14`）。仓库里已经提交的 `build/moduleA.js` 仍是不带扩展名的 `import`，直接用 Node 运行会报 `ERR_MODULE_NOT_FOUND`。要运行模块示例，请按当前配置重新编译。

```bash
cd ts_20240921
npm install
npx tsc
node build/moduleA.js
```

`typescript2024`（已验证：用 TypeScript 5.6.3 执行 `tsc -p typescript2024/tsconfig.json --noEmit` 通过；已提交的 `node typescript2024/dist/demo3.js` 输出 `1 10`）。`package.json` 里的依赖 `tsc@^2.0.4` 不是 TypeScript 编译器，编译请用 `typescript` 提供的 `tsc`。`yarn.lock` 把包解析到 `registry.npm.release.ctripcorp.com`，公网执行 `yarn install --frozen-lockfile` 可能失败。本环境没有重新安装这个目录。

```bash
cd typescript2024
npm install typescript@5.3.3
npx tsc --noEmit
node dist/demo3.js
```

没有自己的 `package.json` 的笔记，用任意一份已安装的 `tsc` 单文件编译即可。下面两条已验证（编译到临时目录后运行）：

```bash
npx tsc --target ES2016 --module commonjs --outDir /tmp/ts-hello \
  "TypeScript学习/1.helloTypeScript/hello.ts"
node /tmp/ts-hello/hello.js
# Hello,sadad

npx tsc --target ES2016 --module commonjs --strict --outDir /tmp/ts-ex5 \
  "TypeScript练习/5/exercise5.ts"
node /tmp/ts-ex5/exercise5.js
# 打印年龄为 23 的 Kate Müller 与 Wilson
```

`TypeScript官方/5.函数/2.剩余参数.ts` 用同样的方式编译运行，输出 `Joseph Samuel Lucas MacKinzie`。整目录直接 `tsc` 会扫进空文件和有意留下的类型错误，不要期望一次通过。

### React 子项目

先切换到 Node 16，再在对应目录安装并启动。默认地址是 <http://localhost:3000>。

```bash
cd hook_study          # 或 react_study_1.7、my-app
npm install
npm start
```

| 目录 | 本环境结果（Node 16.20.2） |
| --- | --- |
| `hook_study` | `npm install` 与 `npm start` 已验证。页面渲染深色按钮 “I am styled by theme context!”。编译有一条未使用的 `useForm` 警告。 |
| `react_study_1.7` | 已验证。页面有标题「React.js 小书」、一段正文，以及 Red / Blue 按钮，文字颜色为红色。有未使用变量警告。 |
| `my-app` | `npm install` 与 `npm start` 能完成编译并返回页面。入口把 `<Router>` 渲染到 `document.body`，且没有传入 `history`。react-router-dom 5 的 `Router` 会在读取 `history.location` 时抛错，浏览器里看不到路由界面。井字棋和「主要概念」没有接到这个入口上。 |
| `test-demo` | `npm install` 会因 react-scripts 4 要求 `typescript@^3.2.1`、项目声明 `^4.0.3` 而失败。加上 `--legacy-peer-deps` 可以装上。`npm start` 已验证，停在 `App.tsx`：解构参数隐式为 `any`（TS7031）。 |
| `antd-demo-ts` | 直接 `npm install` 失败：`craco-less@1.17.1` 要求 `@craco/craco@^5.5.0`，项目使用的是 `^6.0.0`。`--legacy-peer-deps` 之后，`node-sass@4.14.1` 因缺少 Python、且没有 Node 16 预编译包而编译失败。开发服务器没有启动。 |

`npm test`、`npm run build` 没有在本环境执行。

## 备注

- 笔记里保留了注释掉的报错写法、未完成函数和空文件，用来对照类型检查，不代表当前都能通过 `tsc`。
- 若干 `.js` 是早先编译结果，和旁边的 `.ts` 不一定逐字一致。
- `my-app`、`hook_study`、`react_study_1.7`、`antd-demo-ts`、`test-demo` 的说明文件是 Create React App 模板，没有描述这些笔记。
- 没有测试套件覆盖这些学习示例，也没有许可证文件。
