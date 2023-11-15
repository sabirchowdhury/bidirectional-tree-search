# bidirectional-tree-search
find a path that maximises the cost when traversing a tree

Finding a the path that maximises the cost when traversing a tree. The main code is run by calling the function bestSumAnyTreePath(parent, values);

`parent` is a number list, where each number represents the node number of the parent.
`value` is the cost of the node.
Node number is found by using the `index - 1` position in the list.
Note: the number at the start of the list should indicate the total number of nodes: parent[0] and value[0] should be 5 if there are 5 nodes in total.
