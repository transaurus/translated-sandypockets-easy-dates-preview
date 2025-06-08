---
sidebar_label: isDate()
---

# `isDate()`

返回布尔值，若第一个日期晚于第二个日期则返回`false`。

## 用法

```javascript
import { isDate } from 'easy-dates'

isDate(date)
```

## 属性类型

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## 示例

```javascript
isDate(new Date('2022-01-01')) // true
```

```javascript
isDate(`${new Date('2022-01-01')}`) // false
```

```javascript
isDate('2022-01-02') // false
```