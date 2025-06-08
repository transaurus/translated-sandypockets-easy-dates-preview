---
sidebar_label: "getDuration()"
---

# `getDuration()`

返回表示两个日期之间时间差的数值。由于Unix时间戳以秒为单位，当`measure`参数设置为`seconds`时，该函数返回的实际上是一个Unix时间戳。

## 用法

```javascript
import { getDuration } from 'easy-dates';

getDuration(firstDate, secondDate, measure)
```

## 属性类型

| prop         | type   | required | default |
|--------------|--------|----------|---------|
| `firstDate`  | any    | yes      | null    |
| `secondDate` | any    | yes      | null    |
| `measure`    | string | yes      | days    |

## 示例

```javascript
const oneDay = 86400000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);

getDuration(today, tomorrow, 'seconds') // 86400
getDuration(today, tomorrow, 'minutes') // 1440
getDuration(today, tomorrow, 'hours') // 24
getDuration(today, tomorrow, 'days') // 1
getDuration(today, tomorrow, 'weeks') // 0.14246575342465753
getDuration(today, tomorrow, 'months') // 0.03287671232876713
getDuration(today, tomorrow, 'years') // 0.0027397260273972603
```