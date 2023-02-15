/* 
实现Lodash.uniq的类型版本，Unique接受数组T，返回数组T而不重复值。
*/


namespace uniq {
  // 是否全等
  type IsEqual<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

  // U是否存在于T中
  type Includes<T extends readonly any[], U> =
    T extends [infer F, ...infer L]
    ? IsEqual<U, F> extends true
    ? true
    : Includes<L, U>
    : false

  type Unique<T extends any[], U extends any[] = []> =
    T extends [infer F, ...infer L]
    ? Includes<U, F> extends true ? [...Unique<L, [...U]>] : [F, ...Unique<L, [...U, F]>]
    : T

  type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
  type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
  type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
  type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
  type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]



}