---
sidebar_label: minutesToMilliseconds()
---

# `minutesToMilliseconds()`

返回给定分钟数对应的毫秒数。

## 用法

```javascript
import { minutesToMilliseconds } from 'easy-dates';

minutesToMilliseconds(minutes);
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## 示例

```javascript
minutesToMilliseconds(1); // 60000
```

```javascript
minutesToMilliseconds(0.5); // 30000
```