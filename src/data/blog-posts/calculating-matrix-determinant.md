---
title: Unraveling the Matrix (not the movie). Basic Linear Algebra in Python.
publishDate: 04 Feb 2024
description: Introduction to basic linear algebra in Python. In this article, we'll cover how to calculate the determinant of a matrix.
image: /assets/blog/matrix.jpg
---

![Photo of a laptop displaying Matrix-themed numbers](/assets/blog/matrix.jpg)
## Why not use the Numpy?

Don't get me wrong - python ecosystem is great. It has robust libraries for almost everything. They are easy to use and usually have good documentation.

The only thing they are not so good at is *teaching you what is actually happening under the hood*. If you are not an expert in the field, without understanding the basics, you might get lost in the sea. The temtation to just use the library and move on is strong, but it's not the best approach. **Understanding the logic** behind the code is crucial for a good understanding of the problem and for debugging.

## What is a matrix?

A matrix is an recangular array of numbers (usually). It is a fundamental concept in linear algebra. It is used to represent linear transformations, systems of linear equations, and many other things.

$$\begin{bmatrix}2 & -1 \\ 3 & 2 \end{bmatrix}$$
