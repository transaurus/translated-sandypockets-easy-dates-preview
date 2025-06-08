---
sidebar_label: yearsToQuarters()
---

# `yearsToQuarters()`

返回与给定年数相等的季度数。

## 用法

```javascript
import { yearsToQuarters } from 'easy-dates';

yearsToQuarters(years);
```

## 属性类型

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## 示例

```javascript
yearsToQuarters(1); // 4
```

```javascript
yearsToQuarters(0.5); // 2
```

```javascript
yearsToQuarters('1'); // Error
```