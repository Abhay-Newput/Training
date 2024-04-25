// For each of the following, give at least one way of how to access them:

// ---- The <div> DOM node?
console.log(document.body.firstElementChild);

console.log(document.body.children[0]);
// or (the first node is space, so we take 2nd)
console.log(document.body.childNodes[1]);

// The <ul> DOM node?
console.log(document.body.children[1]);

// The second <li> (with Pete)?
console.log(document.body.children[1].children[1]);
