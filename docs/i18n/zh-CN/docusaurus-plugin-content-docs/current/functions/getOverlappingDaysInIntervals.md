---
sidebar_label: getOverlappingDaysInIntervals()
---

# `getOverlappingDaysInIntervals()`

返回一个日期数组，表示两个日期范围之间的重叠天数。

:::tip
此函数返回一个 `Date` 对象数组。如果需要秒数（Unix 时间戳）或毫秒数（JavaScript 时间戳），可以使用 [`dateToUnix()`](dateToUnix) 或 [`dateToMilliseconds()`](dateToMilliseconds) 函数进行转换。
:::

## 用法

```javascript
import { getOverlappingDaysInIntervals } from 'easy-dates';

getOverlappingDaysInIntervals(rangeOne, rangeTwo);
```

## 属性类型

| prop       | type    | required | default   |
|------------|---------|----------|-----------|
| `rangeOne` | `array` | yes      | `null`    |
| `rangeTwo` | `array` | yes      | `null`    |

## 示例

```javascript
getOverlappingDaysInIntervals(
  [new Date(2022, 0, 1), new Date(2022, 0, 10)],
  [new Date(2022, 0, 2), new Date(2022, 0, 11)]
)

// Result
// [
//   new Date(2022, 0, 2),
//   new Date(2022, 0, 3),
//   new Date(2022, 0, 4),
//   new Date(2022, 0, 5),
//   new Date(2022, 0, 6),
//   new Date(2022, 0, 7),
//   new Date(2022, 0, 8),
//   new Date(2022, 0, 9),
//   new Date(2022, 0, 10)
// ]
```

```javascript
getOverlappingDaysInIntervals(
  ["2022, 0, 1", "2022, 0, 10"],
  [new Date(2022, 0, 2), new Date(2022, 0, 11)]
) // Error
```