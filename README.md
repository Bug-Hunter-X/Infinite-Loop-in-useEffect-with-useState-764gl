# React useEffect and useState Infinite Loop Bug

This repository demonstrates a subtle bug that can occur when using React's `useEffect` and `useState` hooks together. The bug arises from an incorrect implementation of state updates within the `useEffect` hook, leading to an infinite loop.

## Bug Description
The `bug.js` file contains a component that attempts to increment the state variable `count` using a functional update within a `useEffect` hook with an empty dependency array. This approach is problematic because the state update inside `useEffect` triggers a re-render, which in turn re-runs the `useEffect` hook, leading to an endless loop.

## Bug Solution
The `bugSolution.js` file provides a corrected implementation. It resolves the infinite loop issue by properly managing state updates within `useEffect`.