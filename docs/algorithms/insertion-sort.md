---
id: "insertion-sort"
aliases:
  - "insertion sort"
  - "sort"
tags:
  - "algorithms"
---

### Insertion Sort is a simple algorithm that compares the next element with the previous and swaps whenever the first element is greater than the second.

#### Javascript Example:

    function insertionSort(array) {
      // Create a for loop to always check the second element
      for (let i = 1; i <= array.length - 1; i++) {
        // Define a new variable to change the main loop but still store the current value
        let j = i;
        // Create another loop to compare the current index and the previous numbers
        while (j > 0 && array[j - 1] > array[j]) {
          // Swap the numbers
          [array[j - 1], array[j]] = [array[j], array[j - 1]];
          // Decrease 1 in order to compare the previous numbers
          j -= 1;
        }
      }
      return array;
    }
