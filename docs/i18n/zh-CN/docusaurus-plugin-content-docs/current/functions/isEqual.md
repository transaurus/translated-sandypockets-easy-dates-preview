---
sidebar_label: isEqual()
---

# `isEqual`

返回布尔值，若第一个日期晚于第二个日期则返回`false`。

## 用法

```javascript
import { isEqual } from 'easy-dates'

isEqual(date, dateToCompare)
```

## 属性类型

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |
| `dateToCompare` | `date` | yes      | n/a     |

## 示例

```javascript
isEqual(new Date('2022-01-01'), new Date('2022-01-01')) // true
```

```javascript
isEqual(new Date(Date.now()), new Date(Date.now())) // true
```

```javascript
isEqual(new Date('2022-01-01'), new Date('2022-01-02')) // false
```

```javascript
isEqual(new Date('2022-01-01')) // false
```

```javascript
isEqual('2022-01-02') // false
```