/* 
实现一个将接收到的String参数转换为一个字母Union的类型。

*/

namespace stringToUnion {

  type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? `${L}` | StringToUnion<R> : never

  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
}