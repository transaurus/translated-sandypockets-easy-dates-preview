---
sidebar_label: secondsToMilliseconds()
---

# `secondsToMilliseconds()`

返回与给定秒数相等的毫秒数。

## 用法

```javascript
import { secondsToMilliseconds } from 'easy-dates';

secondsToMilliseconds(seconds);
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## 示例

```javascript
secondsToMilliseconds(1); // 1000
```

```javascript
secondsToMilliseconds(60); // 60000
```

```javascript
secondsToMilliseconds('60'); // Error
```