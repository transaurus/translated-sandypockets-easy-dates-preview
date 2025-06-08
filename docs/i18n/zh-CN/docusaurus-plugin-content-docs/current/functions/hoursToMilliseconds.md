---
sidebar_label: 'hoursToMilliseconds()'
---

# `hoursToMilliseconds()`

返回指定小时数对应的毫秒数。

### 用法

```javascript
import { hoursToMilliseconds } from 'easy-dates';

hoursToMilliseconds(hours)
```

### 属性类型

| prop    | type     | required | default |
|---------|----------|----------|---------|
| `hours` | `number` | yes      | n/a     |

### 示例

```javascript
hoursToMilliseconds(1) // 3600000
```

```javascript
hoursToMilliseconds(2) // 7200000
```