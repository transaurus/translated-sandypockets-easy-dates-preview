---
sidebar_label: yearsToDays()
---

# `yearsToDays()`

返回与给定年数相等的天数。

## 用法

```javascript
import { yearsToDays } from 'easy-dates';

yearsToDays(years);
```

## 属性类型

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## 示例

```javascript
yearsToDays(1); // 365
```

```javascript
yearsToDays(3); // 1095
```

```javascript
yearsToDays('3'); // Error
```