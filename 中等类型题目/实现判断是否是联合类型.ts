/* 

实现类型IsUnion，它接受输入类型T并返回T是否解析为联合类型。
*/


namespace isUnion {

  type IsUnion<T, U = T> = (T extends T ? [Exclude<U, T>] : never) extends [never]
    ? false
    : true;

  type case1 = IsUnion<string>  // false
  type case2 = IsUnion<string | number>  // true
  type case3 = IsUnion<[string | number]>  // false

}