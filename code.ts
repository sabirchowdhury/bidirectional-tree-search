type TTreeNode = {value: number, neighbours: TTreeNode[]}

function bestSumAnyTreePath(parent: number[], values: number[]): number {
    const buildTree = (): TTreeNode[] => {
        const [nNodeValues, ...nodeValue] = values;
        const [nNodeParents, ...nodeParent] = parent;


        const nodes: TTreeNode[] = Array.from({ length: nNodeValues }, () => ({value: 0, neighbours:[]}));
        for (let i = 0; i < nNodeValues; i++) {
            if (nodeParent[i] !== -1) {
                nodes[nodeParent[i]].neighbours.push(nodes[i]);
                nodes[i].neighbours.push(nodes[nodeParent[i]]);
            }
            nodes[i].value = nodeValue[i];
        }
        return nodes;
    };

    const dfs = (node: TTreeNode, maxSum: number[], visited: Set<TTreeNode>): number => {
        if (!node || visited.has(node)) {
            return 0;
        }
        visited.add(node);

        let localMax = node.value;
        let globalMax = node.value;

        for (const child of node.neighbours) {
            const childSum = dfs(child, maxSum, visited);
            localMax = Math.max(localMax, node.value + childSum);
            globalMax = Math.max(globalMax, localMax, childSum);
        }

        maxSum[0] = Math.max(maxSum[0], globalMax);

        return localMax;
    };

    let result = Number.MIN_SAFE_INTEGER;

    const tree = buildTree();
    for (const node of tree) {
        console.log(result)
        result = Math.max(result, dfs(node, [Number.MIN_SAFE_INTEGER], new Set()));
    }
    return result;
}

// Example usage:
const parents = [5, -1, 0,  1,   2, 0];
const values =  [5,  5, 7, -10, 4, 15];

const result = bestSumAnyTreePath(parents, values);
console.log(`Maximum sum of values along any path: ${result}`);
