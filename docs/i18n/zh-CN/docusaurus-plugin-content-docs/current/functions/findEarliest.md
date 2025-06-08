---
sidebar_label: "findEarliest()"
---

# `findEarliest()`

从日期数组中返回最早的一个日期（以毫秒为单位）。

## 用法

```javascript
import { findEarliest } from 'easy-dates';

findEarliest(array)
```

## 属性类型

接收一个日期数组或以毫秒为单位的日期数组。

| props   | type  | required | default |
|---------|-------|----------|---------|
| `array` | Array | yes      | n/a     |

## 示例

```javascript title="returning milliseconds"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
findEarliest([today, tomorrow]) // returns today's date in milliseconds
```

```javascript title="convert milliseconds to date"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
const latestDate = findEarliest([today, tomorrow]) // 1648513095866
new Date(latestDate) // Sun Mar 27 2022 20:18:22 GMT-0400 (Eastern Daylight Time)
```