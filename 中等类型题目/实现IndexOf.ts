/* 

实现Array.indexOf的类型版本，indexOf＜T，U＞接受数组T，任意U并返回数组T中第一个U的索引。

*/

namespace indexOf {
  export type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

  // your answers
  // 新建泛型C
  // 利用infer关键字分割数组，得到数组第一项和剩余数组
  // 如果存在满足项，返回C数组长度，数组长度就是但当前循环满足项的下标
  // 如果不存在满足项，继续调用方法，并且给C数组新增一位占位符，这里面的0没任何实际意义，可替换为任何字符
  // 如果没有满足项，返回-1
  // C['length'] = 0 => 第一次循环；C['length'] = 1 => 第二次循环；C['length'] = 2 => 第三次循环。。。
  type IndexOf<T, U, C extends any[] = []> = T extends [infer first, ...infer rest] ? Equals<U, first> extends true ? C['length'] : IndexOf<rest, U, [...C, 0]> : -1

  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
}