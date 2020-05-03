function getDependenciesRecursive(dependenciesTree) {
  if (dependenciesTree === undefined) {
    return [];
  }

  let dependencies = [];
  for (var [name, subTree] of Object.entries(dependenciesTree)) {
    dependencies.push(name + '@' + subTree.version);
    dependencies = dependencies.concat(getDependenciesRecursive(subTree.dependencies));
  }

  return dependencies;
}

// Our solution
function getDependencies(tree) {
  if (tree === undefined) {
    return [];
  }
  return Array.from(new Set(getDependenciesRecursive(tree.dependencies).sort()));
}

// Reference solution
// function getDependencies(mod, result) {
//   result = result || []
//   var dependencies = mod && mod.dependencies || {}
//   Object.keys(dependencies).forEach(function(dep) {
//     var key = dep + '@' + mod.dependencies[dep].version
//     if (result.indexOf(key) === -1) result.push(key)
//     getDependencies(mod.dependencies[dep], result)
//   })
//   return result.sort()
// }

module.exports = getDependencies;

function ourTest() {
  const testData = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  };
  console.log(getDependencies(testData));
}
// ourTest();

//  Recursion
//  Exercise 16 of 18


// # Task

// Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. []()'.

// Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

// ## Arguments:

//   * tree: A dependency tree. See below for an example of the structure.

// ## Example

//     var loremIpsum = {
//       "name": "lorem-ipsum",
//       "version": "0.1.1",
//       "dependencies": {
//         "optimist": {
//           "version": "0.3.7",
//           "dependencies": {
//             "wordwrap": {
//               "version": "0.0.2"
//             }
//           }
//         },
//         "inflection": {
//           "version": "1.2.6"
//         }
//       }
//     }

//     getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


// ## Conditions:

//   * Do not use any for/while loops.

// ## Boilerplate


//     function getDependencies(tree) {
//       // SOLUTION GOES HERE
//       // Note: Feel free to add additional arguments
//       // to this function for use with recursive calls.
//       // Or not! There are many ways to recurse.
//     }

//     module.exports = getDependencies


// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


//  » To print these instructions again, run: functional-javascript print
//  » To execute your program in a test environment, run: functional-javascript run program.js
//  » To verify your program, run: functional-javascript verify program.js
//  » For help run: functional-javascript help
