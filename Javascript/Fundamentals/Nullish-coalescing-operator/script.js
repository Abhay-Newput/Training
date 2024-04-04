// `??` returns the first argument if it’s not "null/undefined"

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

const foo = null ?? "default string";
console.log(foo); // "default string"

const baz = 0 ?? 42;
console.log(baz); // 0

/* 
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError


(null || undefined) ?? "foo"; // returns "foo"
*/
