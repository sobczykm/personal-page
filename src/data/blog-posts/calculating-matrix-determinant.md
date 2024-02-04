---
title: Unraveling the Matrix (not the movie). Basic Linear Algebra in Python.
publishDate: 04 Feb 2024
description: Introduction to basic linear algebra in Python. In this article, we'll cover how to calculate the determinant of a matrix.
image: /assets/blog/matrix.jpg
---

![Photo of a laptop displaying Matrix-themed numbers](/assets/blog/matrix.jpg)
## Why not use the Numpy?

Don't get me wrong - python ecosystem is great. It has robust libraries for almost everything. They are easy to use and usually have good documentation.

The only thing they are not so good at is *teaching you what is actually happening under the hood*. If you are not an *expert* in the field, without understanding the basics, you might get lost in the sea. The temtation to just use the library and move on is strong, but it's not the best approach. *Understanding the logic* behind the code is crucial for a good understanding of the problem and for debugging.

# The Theory

## What is a matrix?

A matrix is an recangular array of numbers (usually). It is a fundamental concept in linear algebra. It is used to represent linear transformations, systems of linear equations, and many other things.

Here is an example of a 2x2 matrix:

$$A =\begin{bmatrix}2 & -1 \\ 3 & 2 \end{bmatrix}$$

## What is a determinant?

The determinant of a matrix is a scalar value that can be calculated from the elements of a square matrix.

In case of a 2x2 matrix, the determinant is calculated as follows:

$$A = \begin{bmatrix}a & b \\ c & d \end{bmatrix}$$

$$det A = ad - bc$$

Things get more complicated with bigger matrices, but we will stick to the 2x2 for now.

# The Code

As mentioed above, let's start with the 2x2 matrix.

```python
def calculate_determinant(matrix):
    size = len(matrix)

    if size == 2:
        result = matrix[0][0]*matrix[1][1] - matrix[1][0]*matrix[0][1]
        return result
    else:
        raise ValueError("Matrix size not supported")
```

That was easy, wasn't it? Let's test it.

```python
matrix = [[2, -1], [3, 2]]
print(calculate_determinant(matrix))

# Output: 7
```

## Conclusion

That's it! You can now calculate the determinant of a 2x2 matrix. It's not that hard, is it? But remember, this is just the beginning. There are many more things to learn about linear algebra. But for now, you can be proud of yourself. You've just learned something new. And that's always a good thing.


