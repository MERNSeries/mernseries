# useRef Hook (React JS)

## 1. Accessing DOM elements directly: It can store a reference to a DOM element that persists across re-renders without causing a re-render when updated.

## 2. Storing mutable values: It can hold any mutable value (like a counter) that persists between renders but doesn’t trigger a re-render when changed.

## 3. useRef returns a mutable object with a .current property, where the initial value is set. The value of .current persists across renders.

## 4. Unlike useState, changing the .current value doesn’t cause the component to re-render.
