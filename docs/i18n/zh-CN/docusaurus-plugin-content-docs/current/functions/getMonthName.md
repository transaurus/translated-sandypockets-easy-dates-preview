---
sidebar_label: getMonthName()
---

# `getMonthName()`

返回指定月份编号在给定语言环境下的月份名称，默认语言环境为英语。

:::info
### 支持的语言环境
当前该函数支持以下语言环境：

- 英语 (en)
- 法语 (fr)
:::

## 用法

```javascript
import { getMonthName } from 'easy-dates';

getMonthName(local, index, short);
```

## 属性类型

| prop     | type      | required | default         |
|----------|-----------|----------|-----------------|
| `locale` | `String`  | no       | `en`            |
| `index`  | `Number`  | no       | `current month` |
| `short`  | `Boolean` | no       | `false`         |

## 示例

```javascript
getMonthName("en", 0); // "January"
getMonthName("en", 1); // "February"

getMonthName("fr", 0); // "Janvier"
getMonthName("fr", 1); // "Février"
```

```javascript title="with short parameter true"
getMonthName("en", 0, true); // "Jan"
getMonthName("en", 1, true); // "Feb"

getMonthName("fr", 0, true); // "Jan"
getMonthName("fr", 1, true); // "Fév"
```

```javascript title="returns current month when no index is provided"
getMonthName(); // "April"
```