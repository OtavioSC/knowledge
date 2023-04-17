---
id: "bubble-sort"
aliases:
  - "sort"
  - "Bubble Sort is a simple algorithm that swaps items to achieve sorting."
tags:
  - "algorithms"
---

### Bubble Sort is a simple algorithm that swaps items to achieve sorting.

#### Javascript example:

    function bubbleSort(nums) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
          bubbleSort(nums);
        }
      }
      return nums;
    }

#### Easier and more readable if you use a swap variable to "storage" the state of the current loop cycle.
