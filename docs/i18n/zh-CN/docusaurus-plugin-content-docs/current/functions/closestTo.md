---
sidebar_label: "closestTo()"
---

# `closestTo()`

给定一个日期数组，`closestTo()` 会返回一个包含与 `controlDate` 最接近的 `compareDate` 数据的对象。

## 用法

```javascript
import { closestTo } from 'easy-dates';

closestTo(controlDate, compareDate) 
```

预期输出是一个具有以下属性的 `object`：

- **`difference`**：`controlDate` 与 `compareDate` 参数中最接近日期之间的时间差（以毫秒为单位）。
- **`closest`**：`compareDate` 中最接近日期的日期对象。
- **`closestIndex`**：`compareDate` 数组中最接近日期的索引。

## 属性类型

| prop          | type    | required | default |
|---------------|---------|----------|---------|
| `controlDate` | `date`  | yes      | `null`  |
| `compareDate` | `array` | yes      | `null`  |

## 示例

```javascript title='Compare multiple dates'
const twentyFourHours = 86400000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + twentyFourHours);
const dayAfterTomorrow = new Date(Date.now() + twentyFourHours * 2);
const weekAfterTomorrow = new Date(Date.now() + twentyFourHours * 7);

const argumentsArray = [tomorrow, dayAfterTomorrow, weekAfterTomorrow];

closestTo(today, argumentsArray) // { difference: 85400000, closest: Sat Mar 19 2022 20:26:34 GMT-0400 (Eastern Daylight Time), closestIndex: 0 }
```

```javascript title='Compare a single date'
const twentyFourHours = 86400000;

const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + twentyFourHours);

closestTo(today, [tomorrow]) // { difference: 85400000, closest: Sat Mar 19 2022 20:26:34 GMT-0400 (Eastern Daylight Time), closestIndex: 0 }
```

:::info[比较单个日期？]
请注意 `compareDate` 必须是一个数组。
:::