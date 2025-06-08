---
sidebar_label: isInPast()
---

# `isInPast`

返回布尔值，若给定日期为过去时间则返回 `true`。

## 用法

```javascript
import { isInPast } from 'easy-dates'

isInPast(date)
```

## 属性类型

当传入非 `Date` 类型参数时将抛出错误。

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## 示例

```javascript
isInPast(new Date('2022-01-01')) // true
```

```javascript
isInPast(new Date('2030-01-01')) // false
```

```javascript
isInPast('2022-01-02') // throws an error
```