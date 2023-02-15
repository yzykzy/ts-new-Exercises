/* 

给定一个唯一元素数组，返回所有可能的子序列。
子序列是一个序列，可以通过删除一些元素或不删除元素而不改变其余元素的顺序，从数组中导出。

*/


namespace subsequence {
  // your answers
  type Subsequence<T extends any[]> =
    T extends [infer F, ...infer R]
    ? [F, ...Subsequence<R>] | Subsequence<R>
    : []

  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
}