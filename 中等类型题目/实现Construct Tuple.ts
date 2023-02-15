/* 

构造一个给定长度的元组。

*/


namespace constructTuple {

  type ConstructTuple<T extends number, A extends any[] = []> = A['length'] extends T ? A : ConstructTuple<T, [...A, unknown]>

  type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]
}