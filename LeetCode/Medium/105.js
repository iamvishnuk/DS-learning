// 105. Construct Binary Tree from Preorder and Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function recurse(pStart, pEnd, inStart, inEnd) {
        // base case
        if (pStart > pEnd || inStart > inEnd) return null;

        let rootValue = preorder[pStart];
        let inIndex = inorder.indexOf(rootValue);
        let nLeft = inIndex - inStart;

        let root = new TreeNode(rootValue);

        root.left = recurse(pStart + 1, pStart + nLeft, inStart, inEnd - 1);
        root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd);

        return root;
    }
    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};
