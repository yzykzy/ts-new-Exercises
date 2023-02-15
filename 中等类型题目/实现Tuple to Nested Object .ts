/* 


给定一个只包含字符串类型的元组类型T和一个类型U，递归地构建一个对象。
*/



namespace TupleToNestedObject {

  type TupleToNestedObject<T extends (string | number)[], U> = T extends [] ? U : T extends [infer F extends (string | number), ...infer R] ?
    { [p in F]: R extends string[] ? TupleToNestedObject<R, U> : U } : U

  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
}

