---
sidebar_label: dateToMilliseconds()
---

# `dateToMilliseconds()`

返回表示给定日期的毫秒数（JavaScript时间戳）。

## 用法

```javascript
import { dateToMilliseconds } from 'easy-dates';

dateToMilliseconds(date)
```

## 属性类型

| prop   | type   | required | default   |
|--------|--------|----------|-----------|
| `date` | `date` | yes      | `null`    |

## 示例

```javascript
dateToMilliseconds(new Date("2022-01-01")) // 1640995200000
```

```javascript
dateToMilliseconds("2022-01-01") // Error
```