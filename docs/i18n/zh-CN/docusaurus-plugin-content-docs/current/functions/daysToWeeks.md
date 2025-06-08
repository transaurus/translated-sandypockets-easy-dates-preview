---
sidebar_label: daysToWeeks()
---

# `daysToWeeks()`

返回与给定天数相等的周数。

## 用法

```javascript
import { daysToWeeks } from 'easy-dates';

daysToWeeks(days);
```

## 属性类型

| prop   | type     | required | default  |
|--------|----------|----------|----------|
| `days` | `number` | yes      | `null`   |

## 示例

```javascript
daysToWeeks(7); // 1
```

```javascript
daysToWeeks(14); // 2
```

```javascript
daysToWeeks(365); // 52.142857142857146
```