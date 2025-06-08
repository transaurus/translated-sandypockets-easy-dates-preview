---
sidebar_label: minutesToHours()
---

# `minutesToHours()`

将给定的分钟数转换为对应的小时数。

## 用法

```javascript
import { minutesToHours } from 'easy-dates';

minutesToHours(minutes)
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## 示例

```javascript
minutesToHours(30); // 0.5
```

```javascript
minutesToHours(60); // 1
```

```javascript
minutesToHours("some string"); // throw error
```