/* 

在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。

例如：
*/

namespace Includes {

  // type Includes<T extends any[], U> = U extends T ? true : false 简单的写法

  type Includes<T extends readonly any[], U> = T extends [infer Key, ...infer RestKeys]
    ? IsEqual<Key, U> extends true
    ? true
    : Includes<RestKeys, U>
    : false;

  type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
}