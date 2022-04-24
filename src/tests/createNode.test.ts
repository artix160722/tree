import { createNode } from "../scripts";

test("create node", () => {
  expect(createNode(6)).toEqual({ key: 6, child: [] });
  expect(createNode(20)).toEqual({ key: 20, child: [] });
  expect(createNode(11)).toEqual({ key: 11, child: [] });
});
