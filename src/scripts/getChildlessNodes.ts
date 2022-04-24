import { TreeNode } from "../misc";

const getChildlessNodes = (root: TreeNode) => {
  let nodes = 0;
  const checkChilds = (node: TreeNode) => {
    for (const child of node.child) {
      checkChilds(child);
    }
    return node.child.length !== 0 || ++nodes;
  };
  checkChilds(root);
  return nodes;
};

export { getChildlessNodes };
