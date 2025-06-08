---
sidebar_label: isAfter()
---

# `isAfter()`

返回布尔值，若第一个日期晚于第二个日期则返回 `true`。

## 用法

```javascript
import { isAfter } from 'easy-dates'

isAfter(date, dateToCompare)
```

## 属性类型

| prop            | type   | required | description              |
|-----------------|--------|----------|--------------------------|
| `date`          | `date` | yes      | The date to compare      |
| `dateToCompare` | `date` | yes      | The date to compare with |

## 示例

```javascript
isAfter(new Date('2022-01-01'), new Date('2022-01-02')) // true
```

```javascript
isAfter(new Date('2022-01-01'), new Date('2022-01-01')) // false
```

```javascript
isAfter(new Date('2022-01-02'), new Date('2022-01-01')) // false
```

```javascript
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
isAfter(tomorrow.toString(), today) // error
```