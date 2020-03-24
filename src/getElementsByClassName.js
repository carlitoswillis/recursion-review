// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  const nodes = [];

  const diveNodes = function(currNode) {
    currNode = currNode || document.body;
    let classNames = currNode.className;
    if (classNames.includes(className)) {
      nodes.push(currNode);
    }
    const childrenNodes = currNode.children;
    for (let i = 0; i < childrenNodes.length; i++) {
      diveNodes(childrenNodes[i]);
    }
  };
  diveNodes();
  return nodes;
};
