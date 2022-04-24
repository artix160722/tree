import { createNode, getChildlessNodes } from "../scripts";

test("get childless nodes", () => {
  const root1 = createNode(2);
  const root2 = createNode(7);
  const root3 = createNode(6);

  root1.child.push(createNode(5));
  root1.child.push(createNode(2));
  root1.child[0].child.push(createNode(7));
  root1.child[0].child.push(createNode(7));
  root1.child[1].child.push(createNode(9));
  root1.child[1].child.push(createNode(1));
  root1.child[1].child[1].child.push(createNode(65));
  root1.child[1].child[1].child[0].child.push(createNode(11));

  root2.child.push(createNode(7));
  root2.child.push(createNode(6));
  root2.child[0].child.push(createNode(4));
  root2.child[0].child.push(createNode(90));
  root2.child[1].child.push(createNode(58));
  root2.child[1].child[0].child.push(createNode(5));
  root2.child[1].child[0].child[0].child.push(createNode(0));

  root3.child.push(createNode(4));
  root3.child.push(createNode(6));
  root3.child[0].child.push(createNode(46));
  root3.child[1].child.push(createNode(7));
  root3.child[1].child[0].child.push(createNode(42));
  root3.child[1].child[0].child[0].child.push(createNode(22));

  expect(getChildlessNodes(root1)).toEqual(4);
  expect(getChildlessNodes(root2)).toEqual(3);
  expect(getChildlessNodes(root3)).toEqual(2);
});
