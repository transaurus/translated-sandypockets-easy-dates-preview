---
sidebar_label: weeksToDays()
---

# `weeksToDays()`

返回与给定周数相等的天数。

## 用法

```javascript
import { weeksToDays } from 'easy-dates';

weeksToDays(weeks);
```

## 属性类型

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `weeks` | `number` | yes      | `null`   |

## 示例

```javascript
weeksToDays(1); // 7
```

```javascript
weeksToDays(52); // 364
```

```javascript
weeksToDays('2'); // Error
```