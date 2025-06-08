---
sidebar_label: monthsToQuarters()
---

# `monthsToQuarters()`

返回与给定月数相等的季度数。一个季度包含3个月。

## 用法

```javascript
import { monthsToQuarters } from 'easy-dates';

monthsToQuarters(months);
```

## 属性类型

| prop     | type     | required | default  |
|----------|----------|----------|----------|
| `months` | `number` | yes      | `null`   |

## 示例

```javascript
monthsToQuarters(3); // 1
```

```javascript
monthsToQuarters(12); // 4
```

```javascript
monthsToQuarters('3'); // Error
```