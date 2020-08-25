---
blogtitle: Health is Wealth
path: health-wealth
date: 2020-08-25T16:19:31.404Z
author: Walbrook Wealth Management
educationpage: true
thumbnail: ../src/images/capture.png
---
If `compareFunction` is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array, with no call to `compareFunction`). If `a` and `b` are two elements being compared, then:

* If `compareFunction(a, b)` returns less than 0, sort `a` to an index lower than `b` (i.e. `a` comes first).
* If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
* If `compareFunction(a, b)` returns greater than 0, sort `b` to an index lower than `a` (i.e. `b` comes first).
* `compareFunction(a, b)` must always return the same value when given a specific pair of elements `a` and `b` as its two arguments. If inconsistent results are returned, then the sort order is undefined.

So, the compare function has the following form:

![](../src/images/cc.jpg)