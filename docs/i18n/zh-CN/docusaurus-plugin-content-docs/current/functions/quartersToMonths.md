---
sidebar_label: quartersToMonths()
---

# `quartersToMonths()`

返回与给定季度数相等的月数。一个季度包含3个月。

## 用法

```javascript
import { quartersToMonths } from 'easy-dates';

quartersToMonths(quarters);
```

## 属性类型

| prop       | type     | required | default  |
|------------|----------|----------|----------|
| `quarters` | `number` | yes      | `null`   |

## 示例

```javascript
quartersToMonths(1); // 3
```

```javascript
quartersToMonths(4); // 12
```

```javascript
quartersToMonths('12'); // Error
```