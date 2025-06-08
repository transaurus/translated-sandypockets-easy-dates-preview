---
sidebar_label: "getTomorrow()"
---

# `getTomorrow()`

返回表示明天日期的 JavaScript Date 对象。

## 用法

```javascript
import { getTomorrow } from 'easy-dates';

getTomorrow(locale)
```

## 属性类型

| prop     | type   | required | default   |
|----------|--------|----------|-----------|
| `locale` | string | no       | `'en-CA'` |

## 示例

```javascript title="providing a locale"
getTomorrow('en-CA') // 2022-03-19, 4:00:29 p.m.
```

```javascript title="default 'en-CA' locale"
getTomorrow() // 2022-03-19, 4:00:29 p.m.
```