---
sidebar_label: "getMonthIndex()"
---

# `getMonthIndex()`

返回当前月份的索引值。请注意月份索引从0开始计数。

## 用法

```javascript
import { getMonthIndex } from 'easy-dates';

getMonthIndex(monthName)
```

## 属性类型

| prop        | type   | required | default |
|-------------|--------|----------|---------|
| `monthName` | string | no       | current |

## 示例

```javascript title="get the current month (March)"
getMonthIndex() // 2
// or
getMonthIndex('current') // 2
```

```javascript title="get a specific month by name"
getMonthIndex('April') // 3
// or
getMonthIndex('april') // 3
```

```javascript title="get a specific month by short name"
getMonthIndex('Apr') // 3
// or
getMonthIndex('apr') // 3
```