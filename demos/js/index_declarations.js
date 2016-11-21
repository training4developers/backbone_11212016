'use strict';

// hoist, use function scope
//var t;

// not hoist, use block scope, mutable
// let t;

// not hoist, use block scope, immutable
const t = 4;

t = 10;


console.log(t);

