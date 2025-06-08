---
sidebar_label: "getDaysInMonth()"
---

# `getDaysInMonth()`

返回指定月份的天数。注意月份索引从0开始计数。若未提供参数，则返回当前月份的数据。

## 用法

```javascript
import { getDaysInMonth } from 'easy-dates';

getDaysInMonth(month, year)
```

## 属性类型

参数`month`可以是表示月份索引的数字，也可以是月份名称。

| prop      | type             | required | default       |
|-----------|------------------|----------|---------------|
| `year`    | number           | no       | current year  |
| `month  ` | string or number | no       | current month |

## 示例

```javascript title='using two number arguments'
getDaysInMonth(1, 2022) // 28
```

```javascript title='using a string for the month'
getDaysInMonth("feb", 2022) // 28 
```

```javascript title='when no args are used, the current month (Feb) is returned'
getDaysInMonth() // 28 
```