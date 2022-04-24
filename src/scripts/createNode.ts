import { TreeNode } from "../misc";

const createNode = (data: number) => {
  const newNode: TreeNode = { key: data, child: [] };
  return newNode;
};

export { createNode };
