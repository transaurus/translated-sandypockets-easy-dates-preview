---
sidebar_position: 3
---

# 使用方法

安装 `easy-dates` 后，只需在项目或组件文件顶部导入（或 require）相应函数即可开始使用。

## ES 模块

```javascript
import { dateNow } from 'easy-dates';
```

随后您可以像使用其他函数一样正常调用它。以下是一个 React.js 示例。

```jsx title="src/components/MyComponent.jsx"
import React from 'react';
import { dateNow } from "easy-dates";

function MyComponent() {
  return (
    <div>
      <p>{dateNow('en-CA')}</p>
    </div>
  )
}
```

您可以在 StackBlitz 上查看该函数及其他功能的 ESM 实时演示。

[![在 StackBlitz 中打开 easy-dates 演示](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/easy-dates-demo?file=src/App.js)

## CommonJS

```javascript title="index.js"
const { dateNow } = require('easy-dates');

const todaysDate = dateNow('en-CA');

console.log(todaysDate);
```

上例中，`dateNow()` 函数接收一个参数（`en-CA` 区域设置），并返回指定区域设置的当前日期。示例中的返回值可能类似于 `2022-03-17, 11:50:09 p.m.`

您可以在下方 StackBlitz 中查看该函数及其他功能的 CommonJS 实时演示。

[![在 StackBlitz 中打开 easy-dates 演示](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/easy-dates-nodejs?file=index.js)