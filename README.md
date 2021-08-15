# 基础组件库（Web端）



## 简介

经历多个前端项目迭代孵化，由设计师统一设计规范后提炼的一套基于 `Antd` 的Web端组件库

[演示环境](http://192.168.70.10:9001/web-base-ui/)


## 技术栈

* [Storybook](https://storybook.js.org/): UI组件库开发调试工具
	* addon-docs 
	* addon-knobs 
* Babel
* Webpack
* Rollup
* Typescript


## 安装

安装依赖

```
yarn add @lidig/web-ui
```

组件使用

```
import { Button } from '@lidig/web-ui';

<Button type={'primary'} className={styles.button}>
    登录
</Button>
```

## 开发

```
# 本地开发
yarn start

# 组件打包
yarn build

# 发布
yarn pub
```

## 开发注意事项

* 组件库禁用css modules功能，覆盖 antd 原有样式时使用 `:global` 会无效

## 项目联调

在组件库开发中需要验证功能或到达阶段成果的时候，需要在具体项目中导入组件库时，就需要用到 `yarn link` 来实现本地模块联调开发，具体步骤如下

```
# 将组件库link到全局node_modules中
cd /path/web-ui
yarn link

# 项目中link组件库
cd /path/project
yarn link @lidig/web-ui
```

## 代码规范

* 使用`eslint`、`stylelint`搭配`husky`、`lint-staged`做JS、TS和CSS语法检查
* 使用`commitizen`做代码提交规范控制，需要`npm install -g commitizen`，然后用`git cz`代替`git commit`

## TODO

- [ ] 研究antd-tools打包流程，实现皮肤配置功能
- [ ] 打包时 exclude `*.stories.tsx`
- [ ] 增加 index.d.ts 文件
