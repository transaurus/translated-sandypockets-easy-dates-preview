---
sidebar_label: quartersToYears()
---

# `quartersToYears()`

返回与给定季度数相等的年数。1个季度包含3个月。

## 用法

```javascript
import { quartersToYears } from 'easy-dates';

quartersToYears(quarters);
```

## 属性类型

| prop       | type     | required | default  |
|------------|----------|----------|----------|
| `quarters` | `number` | yes      | `null`   |

## 示例

```javascript
quartersToYears(4); // 1
```

```javascript
quartersToYears(2); // 0.5
```

```javascript
quartersToYears('6'); // Error
```