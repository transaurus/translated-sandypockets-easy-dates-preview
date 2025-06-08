---
sidebar_label: monthsToYears()
---

# `monthsToYears()`

返回与给定月数相等的年数。

## 用法

```javascript
import { monthsToYears } from 'easy-dates';

monthsToYears(months);
```

## 属性类型

| prop     | type     | required | default  |
|----------|----------|----------|----------|
| `months` | `number` | yes      | `null`   |

## 示例

```javascript
monthsToYears(12); // 1
```

```javascript
monthsToYears(6); // 0.5
```

```javascript
monthsToYears(24); // 2
```