---
id: "big-o"
aliases:
  - "Big-O is a notation that uses algebra to determine the complexity of an algorithm."
tags:
  - "big-o"
  - "algorithms"
---

#### Big-O is a notation that uses algebra to determine the complexity of an algorithm.

#### Big-O is always interested in the worst case.

---

### Computational Complexity (How much time an algorithm needs to complete)

#### O(1) -> Constant Time (eg If we have no loops and just do something and exit/return)

#### O(log n) -> Log Time (eg binary search)

#### O(n) -> Linear Time (eg simple search)

#### O(n log n) -> Fast Sorting (eg quicksort)

#### O(n²) -> Slow Sorting (eg selection sort)

#### O(n!) -> Really Slow (eg traveling salesperson)

---

### Spartial Complexity (How much space an algorithm needs to complete)

#### O(n) -> Linear (eg for each item in an array of length 10, create 10 new arrays)

#### O(log n) -> Logrithmic (eg for an array of length 10, it'd create 7 arrays)

#### O(1) -> Constant (eg do not create any extra array)

#### O(n²) -> Quadratic (eg create the same number of arrays length twice)

---

### Tips

#### Thinking in Big-O is about not thinking directly in Big-O.

#### The best approach is to use Big-O as a helper to improve the way you write your function, feature, service, etc.
