---
sidebar_label: dateNowUnix()
---

# `dateNowUnix()`

返回表示当前日期和时间的Unix时间戳（秒数）。

:::tip
如需获取当前日期的毫秒数（JavaScript时间戳），可对`dateNowUnix()`的结果使用[`secondsToMilliseconds()`](/docs/functions/secondsToMilliseconds)进行转换。
:::

## 用法

```javascript
import { dateNowUnix } from 'easy-dates';

dateNowUnix();
```

## 属性类型

该函数无需传入任何属性。

## 示例

```javascript
dateNowUnix() // 1648871014
```