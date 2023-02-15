/* 
实现二进制树顺序遍历的类型版本。

*/



namespace tree {

  interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
  }

  type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ? InorderTraversal<T['left']> extends infer L
    ? InorderTraversal<T['right']> extends infer R ? [...(L extends [...infer _L] ? _L : []), T['val'], ...(R extends [...infer _R] ? _R : [])] : never : never : []

  // type InorderTraversal<T extends TreeNode | null> = T extends TreeNode ?

  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  const tree2 = {
    val: 1,
    left: null,
    right: null
  } as const

  type a = InorderTraversal<typeof tree2>

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
}   