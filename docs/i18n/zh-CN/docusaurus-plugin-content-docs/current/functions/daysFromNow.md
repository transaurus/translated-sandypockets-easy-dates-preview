---
sidebar_label: "daysFromNow()"
---

# `daysFromNow()`

返回与当前日期相隔指定天数的本地化日期。

## 用法

```javascript
import { daysFromNow } from 'easy-dates';

daysFromNow(multiplier, locale)
```

## 属性类型

| prop         | type     | required | default   |
|--------------|----------|----------|-----------|
| `multiplier` | `number` | yes      | `null`    |
| `locale`     | `string` | no       | `'en-CA'` |

## 示例

```javascript title='one day from now - defaults to Canadian English'
daysFromNow(1) // Tue Mar 22 2022 00:08:07 GMT-0400 (Eastern Daylight Time)
```

```javascript title='one day from now - United Kingdom Enlighs'
daysFromNow(1, 'en-UK') // '22/03/2022, 00:08:57'
```

```javascript title='42 days from now - United States English'
daysFromNow(42, 'en-US') // '5/2/2022, 12:09:45 AM'
```