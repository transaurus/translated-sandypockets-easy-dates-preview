---
sidebar_label: secondsToMinutes()
---

# `secondsToMinutes()`

返回与给定秒数相等的分钟数。

## 用法

```javascript
import { secondsToMinutes } from 'easy-dates';

secondsToMinutes(seconds);
```

## 属性类型

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## 示例

```javascript
secondsToMinutes(60); // 1
```

```javascript
secondsToMinutes(3600); // 60
```

```javascript
secondsToMinutes('2'); // Error
```