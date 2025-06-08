---
sidebar_label: "findLatest()"
---

# `findLatest()`
Returns the latest date from an array of dates, in milliseconds. 

## Usage
```javascript
import { findLatest } from 'easy-dates';

findLatest(array)
```

## Prop types
Takes an array of dates, or array of dates as milliseconds.

| props   | type  | required | default |
|---------|-------|----------|---------|
| `array` | Array | yes      | n/a     |

## Examples
```javascript title="returning milliseconds"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
findLatest([today, tomorrow]) // 1580291200000
```

```javascript title="convert milliseconds to date"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
const latestDate = findLatest([today, tomorrow])
new Date(latestDate) // Mon Mar 28 2022 20:17:22 GMT-0400 (Eastern Daylight Time)
```