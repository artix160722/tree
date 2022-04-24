import { useState } from "react";
import { JSONTree } from "react-json-tree";

import {
  createNode,
  getChildlessNodes,
  getLongestEdge,
  areIdentical,
} from "./scripts";
import {
  CardWrapper,
  CardHeading,
  CardHeader,
  CardBody,
  CardButton,
} from "./components";
import { TreeNode } from "./misc";

const App = () => {
  const [result, setResult] = useState<string | number>("");
  const root1 = createNode(5);
  const root2 = createNode(1);
  const root3 = createNode(5);
  const hadleNodes = () => setResult(getChildlessNodes(root1));
  const hadleEdges = () => setResult(getLongestEdge(root1));
  const hadleCompare = (A: TreeNode, B: TreeNode) =>
    setResult(areIdentical(A, B) + "");

  root1.child.push(createNode(3));
  root1.child.push(createNode(7));
  root1.child[0].child.push(createNode(2));
  root1.child[0].child.push(createNode(5));
  root1.child[1].child.push(createNode(1));
  root1.child[1].child.push(createNode(0));
  root1.child[1].child[1].child.push(createNode(2));
  root1.child[1].child[1].child.push(createNode(8));
  root1.child[1].child[1].child[1].child.push(createNode(5));

  root2.child.push(createNode(3));
  root2.child.push(createNode(1));
  root2.child[0].child.push(createNode(11));
  root2.child[0].child.push(createNode(9));
  root2.child[1].child.push(createNode(1));
  root2.child[1].child.push(createNode(9));
  root2.child[1].child[1].child.push(createNode(1));
  root2.child[1].child[1].child.push(createNode(0));
  root2.child[1].child[1].child[1].child.push(createNode(3));

  root3.child.push(createNode(3));
  root3.child.push(createNode(7));
  root3.child[0].child.push(createNode(2));
  root3.child[0].child.push(createNode(5));
  root3.child[1].child.push(createNode(1));
  root3.child[1].child.push(createNode(0));
  root3.child[1].child[1].child.push(createNode(2));
  root3.child[1].child[1].child.push(createNode(8));
  root3.child[1].child[1].child[1].child.push(createNode(5));

  return (
    <>
      <CardWrapper role="card">
        <CardHeader>
          <CardHeading>Result:</CardHeading>
          <CardHeading>{result}</CardHeading>
        </CardHeader>
        <CardBody>
          <p>tree 1:</p>
          <JSONTree data={root1} />
          <p>tree 2:</p>
          <JSONTree data={root2} />
          <p>tree 3:</p>
          <JSONTree data={root3} />
        </CardBody>
        <CardButton onClick={hadleNodes}>
          nodes without children in tree 1
        </CardButton>
        <CardButton onClick={hadleEdges}>
          largest number of edges in tree 1
        </CardButton>
        <CardButton onClick={() => hadleCompare(root1, root2)}>
          compare tree 1 and 2
        </CardButton>
        <CardButton onClick={() => hadleCompare(root1, root3)}>
          compare tree 1 and 3
        </CardButton>
      </CardWrapper>
    </>
  );
};

export default App;
