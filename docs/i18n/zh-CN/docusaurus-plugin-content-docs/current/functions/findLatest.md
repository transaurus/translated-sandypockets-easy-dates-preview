---
sidebar_label: "findLatest()"
---

# `findLatest()`

从日期数组中返回最晚的日期（以毫秒为单位）。

## 用法

```javascript
import { findLatest } from 'easy-dates';

findLatest(array)
```

## 属性类型

接收日期数组或以毫秒为单位的日期数组。

| props   | type  | required | default |
|---------|-------|----------|---------|
| `array` | Array | yes      | n/a     |

## 示例

```javascript title="returning milliseconds"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
findLatest([today, tomorrow]) // 1580291200000
```

```javascript title="convert milliseconds to date"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
const latestDate = findLatest([today, tomorrow])
new Date(latestDate) // Mon Mar 28 2022 20:17:22 GMT-0400 (Eastern Daylight Time)
```