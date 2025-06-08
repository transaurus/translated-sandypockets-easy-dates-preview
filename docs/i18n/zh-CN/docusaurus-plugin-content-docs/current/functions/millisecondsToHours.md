---
sidebar_label: 'millisecondsToHours()'
---

# `millisecondsToHours()`

将给定的毫秒数转换为小时数。

### 用法

```javascript
import { millisecondsToHours } from 'easy-dates';

millisecondsToHours(milliseconds);
```

### 属性类型

| prop           | type     | required | default |
|----------------|----------|----------|---------|
| `milliseconds` | `number` | yes      | n/a     |

### 示例

```javascript
millisecondsToHours(3600000) // 1
```

```javascript
millisecondsToHours(7200000) // 2
```