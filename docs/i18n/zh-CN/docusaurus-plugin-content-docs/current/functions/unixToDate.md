---
sidebar_label: 'unixToDate()'
---

# `unixToDate()`

给定Unix时间戳，返回对应的JavaScript Date对象。可选传入区域设置参数以返回特定区域格式的日期对象。

## 用法

```javascript
import { unixToDate } from 'easy-dates'

unixToDate(unixTimeStamp, locale)
```

## 属性类型

| prop            | type     | required | default |
|-----------------|----------|----------|---------|
| `unixTimeStamp` | `number` | yes      | `null`  |
| `locale`        | `string` | no       | `null`  |

## 示例

```javascript title="returns an object"
unixToDate(1648078332) // Wed Mar 23 2022 19:32:12 GMT-0400 (Eastern Daylight Time)
```

```javascript title="returns a string"
unixToDate(1648078332, 'en-CA') // 2022-03-23, 7:32:12 p.m.
```