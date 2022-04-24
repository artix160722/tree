import { TreeNode } from "../misc";

const getLongestEdge = (root: TreeNode) => {
  const edges: Array<number> = [];
  const getEdges = (node: TreeNode, length: number) => {
    for (const child of node.child) {
      getEdges(child, length + 1);
    }
    return node.child.length !== 0 || edges.push(length);
  };
  getEdges(root, 0);
  return Math.max(...edges);
};

export { getLongestEdge };
