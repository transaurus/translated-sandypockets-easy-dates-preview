---
sidebar_label: yearsToMonths()
---

# `yearsToMonths()`

返回与给定年数相等的月数。

## 用法

```javascript
import { yearsToMonths } from 'easy-dates';

yearsToMonths(years);
```

## 属性类型

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## 示例

```javascript
yearsToMonths(1); // 12
```

```javascript
yearsToMonths(2.5); // 30
```

```javascript
yearsToMonths('1'); // Error
```