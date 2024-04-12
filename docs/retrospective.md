# 24.04.04

## Darkmode? Body? Html? useHook?

### Problem Identification

-   The `@layer base` directive does not seem to function as expected.
-   Manual changes to the `className` of the HTML element occur when toggling dark mode with Tailwind CSS.
-   Attempting to apply custom theme colors to the `body` tag.

### Root Cause Analysis

-   There is an issue preventing the successful change of the `className` for the body element. It is crucial to identify the underlying cause.
-   The project utilizes a custom hook related to dark mode, which may be influencing the `className` of the `body` tag.

### Solution

-   In `index.css` which is main.css of tailwind. use @layer base for body tag.
-   Change darkmode class changes from body to html.

### remain tasks

-   Why className doesn't change on tailwindcss with usehook?

# 24.04.11

## Img src route in react project with github page deploy

### Problem Identification

### Root Cause Analysis

### Solution

### remain tasks
