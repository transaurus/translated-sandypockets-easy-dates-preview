---
sidebar_label: secondsToHours()
---

# `secondsToHours()`

返回给定秒数对应的小时数。1小时等于3600秒。

## 用法

```javascript
import { secondsToHours } from 'easy-dates';

secondsToHours(seconds);
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## 示例

```javascript
secondsToHours(3600); // 1
```

```javascript
secondsToHours(1800); // 0.5
```

```javascript
secondsToHours('60'); // Error
```