import { createNode, getLongestEdge } from "../scripts";

test("get childless nodes", () => {
  const root1 = createNode(6);
  const root2 = createNode(1);
  const root3 = createNode(8);

  root1.child.push(createNode(7));
  root1.child.push(createNode(10));
  root1.child[0].child.push(createNode(37));
  root1.child[0].child.push(createNode(6));
  root1.child[1].child.push(createNode(9));
  root1.child[1].child.push(createNode(8));
  root1.child[1].child[1].child.push(createNode(22));
  root1.child[1].child[1].child.push(createNode(11));

  root2.child.push(createNode(7));
  root2.child.push(createNode(4));
  root2.child[0].child.push(createNode(2));
  root2.child[0].child.push(createNode(9));
  root2.child[1].child.push(createNode(2));
  root2.child[1].child.push(createNode(7));
  root2.child[1].child[1].child.push(createNode(71));
  root2.child[1].child[1].child.push(createNode(61));
  root2.child[1].child[1].child[1].child.push(createNode(32));
  root2.child[1].child[1].child[1].child[0].child.push(createNode(1));

  root3.child.push(createNode(5));
  root3.child.push(createNode(80));
  root3.child[0].child.push(createNode(44));
  root3.child[0].child.push(createNode(71));
  root3.child[1].child.push(createNode(12));
  root3.child[1].child.push(createNode(29));
  root3.child[1].child[1].child.push(createNode(4));
  root3.child[1].child[1].child.push(createNode(1));
  root3.child[1].child[1].child[1].child.push(createNode(3));
  root3.child[1].child[1].child[1].child[0].child.push(createNode(3));
  root3.child[1].child[1].child[1].child[0].child[0].child.push(createNode(10));

  expect(getLongestEdge(root1)).toEqual(3);
  expect(getLongestEdge(root2)).toEqual(5);
  expect(getLongestEdge(root3)).toEqual(6);
});
