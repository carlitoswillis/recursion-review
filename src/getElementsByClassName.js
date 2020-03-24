// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  const nodes = [];

  let currentNode;

  const dive = function(currNode) {
    let classNames = currNode.className.split(' '); // maybe comment this out
    // currNode.classList.includes(className)||
    if (classNames.includes(className)) {
      nodes.push(currNode);
    }
  };
};
