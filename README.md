# increment-map

[![Build Status](https://travis-ci.org/dejakob/increment-map.svg?branch=master)](https://travis-ci.org/dejakob/increment-map)
[![NPM](https://img.shields.io/npm/v/increment-map/latest.svg?label=npm)](https://npmjs.com/package/increment-map)

Create a map with incrementing values

## Motivation

**What is the point of 'overcomplicating' a for loop?**

In some scenarios (e.g. React Components), it's not that straight forward to loop from a to b. This methods implements a simple for-loop in a more functional way.


## Usage

Vanilla JS

```js
const incrementMap = require('increment-map');

incrementMap(0, 5, function (index) {
  console.log(index);
})

// Will output 0 1 2 3 4 5
```

React Example

```jsx
function List() {
  return (
    <ul>
      {incrementMap(1, 3, index => <li>{`Item ${index}`}</li>)}
    </ul>
  );
}
```

## Properties

* From (including): From which number do you want to count?
* To (including): To which number do you want to count?
* mapFunction