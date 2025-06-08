---
sidebar_label: "dateToUnix()"
---

# `dateToUnix()`

返回给定日期对象、字符串或毫秒时间戳对应的Unix时间戳。

### 用法

```javascript
import { dateToUnix } from 'easy-dates';

const dateObject = new Date(Date.now()) // Sat Mar 19 2022 23:46:03 GMT-0400 (Eastern Daylight Time)
const millisecondsDateStamp = new Date(Date.now()).getTime(); // 1647747963147

dateToUnix(dateObject) // 1647747963
dateToUnix(millisecondsDateStamp) // 1647747963
```

### 属性类型

| prop   | type  | required | default  |
|--------|-------|----------|----------|
| `date` | `any` | yes      | `null`   |

:::info[使用`string`类型参数时]

_是否可以通过本地化日期字符串转换回日期或时间戳？_ 可以。但应尽量避免。示例如下：

```javascript title="本地化字符串"
const localeDateString = new Date(millisecondsDateStamp).toLocaleString('en-CA') // '2022-03-19, 11:46:03 p.m.'

dateToUnix(localeDateString) // 1647734940
```

如您所见，前两种转换（日期对象或毫秒时间戳）是精确的，但将本地化日期字符串转换回日期对象或时间戳则不然。

类似行为也出现在将`object`强制转换为`string`时：

```javascript title="日期对象转为字符串"
const someDateObject = new Date(Date.now()) // Sun Mar 20 2022 23:21:10 GMT-0400 (Eastern Daylight Time)

dateToUnix("Sun Mar 20 2022 23:21:10 GMT-0400 (Eastern Daylight Time)") // 1647919810
```

### 何时可以使用字符串参数？
当字符串值为数字时：

```javascript
const someTimeNumber = new Date(Date.now()).getTime();

dateToUnix("1647833600771") // 1647833600
```
:::