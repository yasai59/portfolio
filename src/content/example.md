---
title: "Test entry"
description: "Testing the layout of an MD file in Astro."
date: "2025-10-10"
author: "Alejandro Vidal Casado"
tags: ["astro", "blog", "markdown"]
coverImg: "https://w.wallhaven.cc/full/5g/wallhaven-5g22q5.png"
altImg: "Test photo"
---

---

## Heading 2
 
### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

##### Heading 5

#### Heading 4

### Heading 3

## Heading 2

 
link: [jeje.com](https://google.com)


## Code blocks

Notation diff:

```ts
export function foo() {
  console.log('hewwo') // [!code --]
  console.log('hello') // [!code ++]
}
```

Highlight:

```ts
// [!code word:options:2]
const options = { foo: 'bar' }
options.foo = 'baz'
console.log(options.foo) // this one will not be highlighted
```

```ts
// [!code highlight:2]
console.log('Highlighted')
console.log('Highlighted')
console.log('Not highlighted')
```

```ts
console.log('Not highlighted')
// [!code highlight:1]
console.log('Highlighted')
console.log('Not highlighted')
```

Focus:

```ts
console.log('Not focused');
console.log('Focused') // [!code focus]
console.log('Not focused');
```

```ts
// [!code focus:2]
console.log('Focused')
console.log('Focused')
console.log('Not focused')
```

Errors:

```ts
console.log('No errors or warnings')
console.error('Error') // [!code error]
console.warn('Warning') // [!code warning]
```

 
## Images

![alt_text](https://w.wallhaven.cc/full/5g/wallhaven-5g22q5.png "text on cursor hover")

## Text

this is a paragraph with a break line.  
did this work?

this is a **bold** word and this an *italic* word

this text is ***really important***

As my grandfather said:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> Nested will work?

## Lists

1. First item
2. Second item
3. Third item
   1. Third.1 item
   2. Third.2 item
4. Fourth item

- Unordered item 1
- Unordered item 2
  - Unordered again 1
  - Unordered again 2
- Unordered item 3

Unordered list starting with numbers: 

- 1968\. A great year!
- I think 1969 was second best.

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item


