/* 
递归地将阵列展平到深度倍。
*/

namespace FlattenDepth {

  type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer R]
    ? F extends unknown[]
    ? [...F, ...FlattenOnce<R>]
    : [F, ...FlattenOnce<R>]
    : [];


  type FlattenDepth<T extends unknown[], N extends number = 1, Acc extends unknown[] = []> = T extends FlattenOnce<T> ? T : Acc['length'] extends N
    ? T
    : FlattenDepth<FlattenOnce<T>, N, [...Acc, 1]>;



  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
} 