---
sidebar_label: minutesToSeconds()
---

# `minutesToSeconds()`

返回与给定分钟数相等的秒数。

## 用法

```javascript
import { minutesToSeconds } from 'easy-dates';

minutesToSeconds(minutes);
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## 示例

```javascript
minutesToSeconds(1); // 60
```

```javascript
minutesToSeconds(60); // 3600
```

```javascript
minutesToSeconds('1'); // Error
```