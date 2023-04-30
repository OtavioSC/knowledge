---
id: "how-to-design-programs"
aliases:
  - "How to Design Programs"
tags: []
---

## How to Design Programs

##### Some notes about the book "How to Design Programs by Matthias Felleisen and Shriram Krishnamurthi"

#### A widespread prejudice about computers concerns their innards. Many believe that it is all about bits and bytes—whatever those are—and possibly numbers because everyone knows that computers can calculate.

#### Programming languages are about computing with information, and information comes in all shapes and forms.

#### Expression to add an underline in the fifth position of the word.

    (string-append (substring str 0 ( - i 1)) "_" (substring str i ))

---

#### In BSL, numbers are classified in two ways: by construction and by their exactness.

---

#### understanding complex numbers is not essential to being a program designer.

#### One-argument Function (unary function)

#### Two-argument Function (dubbed binary)

#### Three-argument Function (ternary function)

---

#### We don’t need to write functions or programs if the output is always the same.

---

#### Evaluating a function application proceeds in three steps: DrRacket determines the values of the argument expressions; it checks that the number of arguments and the number of function parameters are the same; if so, DrRacket computes the value of the body of the function, with all parameters replaced by the corresponding argument values. This last value is the value of the function application.

#### In general, when a problem refers to distinct tasks of computation, a program should consist of one function per task and a main function that puts it all together.
