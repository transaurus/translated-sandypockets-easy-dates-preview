---
sidebar_label: 'hoursToMinutes()'
---

# `hoursToMinutes()`

返回指定小时数对应的分钟数。

### 用法

```javascript
import { hoursToMinutes } from 'easy-dates';

hoursToMinutes(hours)
```

### 属性类型

| prop    | type     | required | default |
|---------|----------|----------|---------|
| `hours` | `number` | yes      | n/a     |

### 示例

```javascript
hoursToMinutes(1) // 60
```

```javascript
hoursToMinutes(2) // 120
```