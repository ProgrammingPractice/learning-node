function curryNRecursive(fn, n, args, argsCount) {
  if (n === 1) {
    return function(...remaining_args) {
      finalArgs = args.concat(remaining_args);
      return fn(...finalArgs);
    }
  }

  return function(arg) {
    index = argsCount - n;
    args[index] = arg;
    return curryNRecursive(fn, n - 1, args, argsCount);
  }
}

function curryN(fn, n) {
  // console.log('function: ', fn);
  // console.log('n: ', n);

  n = (n === undefined) ? fn.length : n;

  // console.log('n to be used: ', n);

  return curryNRecursive(fn, n, [], n);
}

// Official solution
// function curryN(fn, n) {
//   n = n || fn.length
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg)
//     return curryN(fn.bind(this, arg), n - 1)
//   }
// }

module.exports = curryN;

function test1() {
  function add3(one, two, three) {
    return one + two + three;
  }

  console.log(curryN(add3, 3)(1)(2)(3)); // => 6
  console.log(curryN(add3, 2)(1)(2, 3)); // => 6
}
function test2() {
  function add3(one, two, three) {
    return one + two + three
  }

  var curryC = curryN(add3)
  var curryB = curryC(1)
  var curryA = curryB(2)

  var result = []
  result.push("curryA(3) => " + curryA(3)) // => 6
  result.push("curryA(10) => " + curryA(10)) // => 13
  result.push("curryN(add3)(1)(2)(3) => " + curryN(add3)(1)(2)(3)) // => 6
  console.log('result', result);
}
function test3() {
  function joinWithComma() {
    return Array.prototype.join.call(arguments, ',');
  }

  var result = []
  var curry1 = curryN(joinWithComma, 4)
  var curry2 = curry1(1)
  var curry3 = curry2(2)
  var curry4 = curry3(3)
  result.push(curry4(4))
  result.push("Testing we can change the inner function to generate different set of outputs:")
  var curry3 = curry2(6)
  var curry4 = curry3(3)
  result.push(curry4(5))
  console.log('result', result);
}
// test1();
// test2();
// test3();

// This is an example implementation of curry3, which curries up to 3 arguments:

//     function curry3(fun){
//       return function(one){
//         return function(two){
//           return function (three){
//             return fun(one, two, three)
//           }
//         }
//       }
//     }

// If we were to use this implementation with this sample function:

//     function abc(one, two, three) {
//       return one/two/three
//     }

// It would work like so:

//     var curryC = curry3(abc)
//     var curryB = curryC(6)
//     var curryA = curryB(3)

//     console.log(curryA(2)) // => 1

// # Task

// In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.

// curryN will take two parameters:

//   * fn: The function we want to curry.
//   * n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.

// ## Example

//     function add3(one, two, three) {
//       return one + two + three
//     }

//     var curryC = curryN(add3)
//     var curryB = curryC(1)
//     var curryA = curryB(2)
//     console.log(curryA(3)) // => 6
//     console.log(curryA(10)) // => 13

//     console.log(curryN(add3)(1)(2)(3)) // => 6

// ## Conditions

//   * Do not use any for/while loops or `Array.prototype.forEach`.

// ## Hint

//   * You can detect the number of expected arguments to a function (it's arity) by checking a function's .length property.

// ## Boilerplate

//     function curryN(fn, n) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = curryN
