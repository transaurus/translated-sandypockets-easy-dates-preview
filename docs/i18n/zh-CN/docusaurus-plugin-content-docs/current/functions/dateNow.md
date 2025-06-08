---
sidebar_label: 'dateNow()'
---

# `dateNow()`

`dateNow()` 函数返回指定区域设置的当前日期。

### 用法

```javascript
import { dateNow } from 'easy-dates';

dateNow(locale)
```

### 属性类型

若调用函数时未提供区域设置参数，则默认使用加拿大英语区域设置。

| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `locale` | `string` | no       | `'en-CA'` |

### 示例

有关可使用的区域设置更多示例，请参阅 [MDN文档：使用区域设置](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#using_locales)。

```javascript title='Canadian English'
dateNow('en-CA') // 2022-03-20, 11:07:04 p.m.
```

```javascript title='US English'
dateNow('en-US') // 3/20/2022, 11:07:04 PM
```

```javascript title='UK English'
dateNow('en-UK') // 20/03/2022, 23:06:39
```

```javascript title='Arabic'
dateNow('ar-EG') // '٢٠‏/٣‏/٢٠٢٢, ١١:٠٨:٠١ م'
```