---
sidebar_label: millisecondsToSeconds()
---

# `millisecondsToSeconds()`

返回与给定毫秒数相等的秒数。

## 用法

```javascript
import { millisecondsToSeconds } from 'easy-dates';

millisecondsToSeconds(milliseconds);
```

## 属性类型

| prop           | type     | required | default  |
|----------------|----------|----------|----------|
| `milliseconds` | `number` | yes      | `null`   |

## 示例

```javascript
millisecondsToSeconds(1000); // 1
```

```javascript
millisecondsToSeconds(60000); // 60
```

```javascript
millisecondsToSeconds('60000'); // Error
```