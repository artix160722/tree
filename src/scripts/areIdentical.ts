import { TreeNode } from "../misc";

const areIdentical = (root1: TreeNode, root2: TreeNode) => {
  if (root1 == null && root2 == null) {
    return true;
  }
  if (root1 == null || root2 == null) {
    return false;
  }
  let queue1: Array<TreeNode> = [root1];
  let queue2: Array<TreeNode> = [root2];
  while (queue1.length !== 0 && queue2.length !== 0) {
    const node1: TreeNode = queue1[0];
    const node2: TreeNode = queue2[0];
    if (node1.key !== node2.key) {
      return false;
    }
    queue1.shift();
    queue2.shift();
    if (node1.child != null && node2.child != null) {
      queue1 = queue1.concat(node1.child);
      queue2 = queue2.concat(node2.child);
    } else if (node1.child != null || node2.child != null) {
      return false;
    }
  }
  return true;
};

export { areIdentical };
