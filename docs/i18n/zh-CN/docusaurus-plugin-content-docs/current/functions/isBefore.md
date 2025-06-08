---
sidebar_label: isBefore()
---

# `isBefore()`

返回布尔值，若第一个日期在第二个日期之后则返回 `false`。

## 用法

```javascript
import { isBefore } from 'easy-dates'

isBefore(date, dateToCompare)
```

## 属性类型

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |
| `dateToCompare` | `date` | yes      | n/a     |

## 示例

```javascript
isBefore(new Date('2022-01-01'), new Date('2022-01-02')) // false
```

```javascript
isBefore(new Date('2022-01-01'), new Date('2022-01-01')) // true
```

```javascript
isBefore(new Date('2022-01-02'), new Date('2022-01-01')) // true
```

```javascript
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
isBefore(tomorrow.toString(), today) // error when given the wrong type
```