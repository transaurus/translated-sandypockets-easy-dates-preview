---
sidebar_label: 'millisecondsToMinutes()'
---

# `millisecondsToMinutes()`

将给定的毫秒数转换为分钟数。

### 用法

```javascript
import { millisecondsToMinutes } from 'easy-dates';

millisecondsToMinutes(milliseconds);
```

### 属性类型

| prop           | type     | required | default |
|----------------|----------|----------|---------|
| `milliseconds` | `number` | yes      | n/a     |

### 示例

```javascript
millisecondsToMinutes(3600000) // 60
```

```javascript
millisecondsToMinutes(7200000) // 120
```