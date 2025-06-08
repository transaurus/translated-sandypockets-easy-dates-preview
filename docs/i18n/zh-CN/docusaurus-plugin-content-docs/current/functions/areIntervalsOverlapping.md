---
sidebar_label: areIntervalsOverlapping()
---

# `areIntervalsOverlapping()`

返回一个布尔值，表示两个日期范围是否存在重叠。

## 用法

```javascript
import { areIntervalsOverlapping } from 'easy-dates';

areIntervalsOverlapping(rangeOne, rangeTwo);
```

## 属性类型

该函数接受两个数组作为参数。每个数组应包含两个日期，构成一个日期范围。

| prop       | type    | required | default   |
|------------|---------|----------|-----------|
| `rangeOne` | `Array` | yes      | `null`    |
| `rangeTwo` | `Array` | yes      | `null`    |

:::info
每个数组内部（即 `rangeOne`），第一个日期必须早于第二个日期。

#### 示例
```javascript
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);

// 较早的日期必须排在前面
const rangeOne = [today, tomorrow]; // 正确写法
const rangeTwo = [tomorrow, today]; // 错误写法

// 如果数组顺序正确，则参数顺序无关紧要
areIntervalsOverlapping(rangeOne, rangeTwo) // 正确调用方式
areIntervalsOverlapping(rangeTwo, rangeOne) // 或这样调用
```
:::

## 示例

```javascript
const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);
const nextWeek = new Date(Date.now() + oneDay * 7);

const rangeOne = [today, nextWeek];
const rangeTwo = [tomorrow, nextWeek];

areIntervalsOverlapping(rangeOne, rangeTwo) // true
```

```javascript
const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(Date.now());
const nextWeek = new Date(Date.now() + oneDay * 7);

const rangeOne = [today, nextWeek];

const twoWeeks =  new Date(Date.now() + oneDay * 14);
const threeWeeks =  new Date(Date.now() + oneDay * 21);

const rangeThree = [twoWeeks, threeWeeks]

areIntervalsOverlapping(rangeOne, rangeThree) // false
```