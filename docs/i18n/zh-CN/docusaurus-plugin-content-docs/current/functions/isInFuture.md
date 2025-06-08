---
sidebar_label: isInFuture()
---

# `isInFuture`

返回布尔值，若给定日期属于未来时间则返回 `true`。

## 用法

```javascript
import { isInFuture } from 'easy-dates'

isInFuture(date)
```

## 属性类型

当传入非 `Date` 类型时会抛出错误。

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## 示例

```javascript
isInFuture(new Date('2022-01-01')) // false
```

```javascript
isInFuture(new Date('2030-01-01')) // true
```

```javascript
isInFuture('2022-01-02') // throws an error
```