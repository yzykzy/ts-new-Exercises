/* 
实现高级util类型UnionToIntersection<U>
*/

namespace UnionToIntersection {

  // Use TypeScript to implement the 'intersection' operation
  // when there is a 'continuous variant position' in the input function parameter type
  type UnionToIntersection<U> = (
    U extends U ? (x: U) => unknown : never
  ) extends (x: infer R) => unknown
    ? R
    : never

  type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
}