import { createNode, areIdentical } from "../scripts";

test("are identical", () => {
  const root1 = createNode(5);
  const root2 = createNode(7);
  const root3 = createNode(5);

  root1.child.push(createNode(3));
  root1.child.push(createNode(8));
  root1.child[0].child.push(createNode(4));
  root1.child[0].child.push(createNode(7));
  root1.child[1].child.push(createNode(1));
  root1.child[1].child.push(createNode(2));
  root1.child[1].child[1].child.push(createNode(2));
  root1.child[1].child[1].child.push(createNode(10));
  root1.child[1].child[1].child[1].child.push(createNode(32));

  root2.child.push(createNode(7));
  root2.child.push(createNode(1));
  root2.child[0].child.push(createNode(41));
  root2.child[0].child.push(createNode(8));
  root2.child[1].child.push(createNode(2));
  root2.child[1].child.push(createNode(2));
  root2.child[1].child[1].child.push(createNode(7));
  root2.child[1].child[1].child.push(createNode(6));
  root2.child[1].child[1].child[1].child.push(createNode(8));

  root3.child.push(createNode(3));
  root3.child.push(createNode(8));
  root3.child[0].child.push(createNode(4));
  root3.child[0].child.push(createNode(7));
  root3.child[1].child.push(createNode(1));
  root3.child[1].child.push(createNode(2));
  root3.child[1].child[1].child.push(createNode(2));
  root3.child[1].child[1].child.push(createNode(10));
  root3.child[1].child[1].child[1].child.push(createNode(32));

  expect(areIdentical(root1, root3)).toEqual(true);
  expect(areIdentical(root1, root2)).toEqual(false);
  expect(areIdentical(root2, root3)).toEqual(false);
});
