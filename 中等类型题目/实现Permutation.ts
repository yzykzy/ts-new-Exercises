/* 
实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

*/


namespace Permutation {

  type Permutation<T, K = T> = [T] extends [never] ? [] : K extends T ? [K, ...Permutation<Exclude<T, K>>] : [];
  // K extends T（*） 相当于对联合类型进行遍历,正常来说可以写成 T extends T （**） 。但是（**）的前一个T已经代表Ti（就是原本T中的每一项），所以要引入K类型防止歧义

  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
}