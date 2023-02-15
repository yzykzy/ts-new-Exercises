/* 

实现Array.join的类型版本，join＜T，U＞接受数组T、字符串或数字U，并返回带有U拼接的数组T。

*/

namespace join {

  type Join<T, U extends string | number> = T extends [infer F extends string, ...infer R] ? `${F}${R extends [] ? '' : U}${Join<R, U>}` : ''
  // type Join<T, U extends string | number> = T extends [infer F extends string, ...infer O] ? `${F}${O extends [] ? '' : U}${Join<O, U>}` : ''
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
}