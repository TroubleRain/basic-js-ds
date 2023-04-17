const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!BinarySearchTree.root) {
      return null
    }else return BinarySearchTree.root
  }
  add(value) {
    console.log(value);
    if (!this.root) {
      this.root = value
    }else{
      let currentRoot = this.root
      while (true) {
        if (value< this.root) {

          if (!BinarySearchTree.left) {
            BinarySearchTree.left = value
            return
          }
          current = BinarySearchTree.left
        }
        else{
          if (!BinarySearchTree.right) {
            BinarySearchTree.right = value
            return
          }
          current = BinarySearchTree.right
        }
      }
    }
  }
  

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

