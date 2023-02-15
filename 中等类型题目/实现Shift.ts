/* 
实现Array.shift的类型版本
*/

namespace Shift {


  type Shift<T extends readonly any[]> = T extends [] ? [] : T extends [infer F, ...infer R] ? R : never

  type Result = Shift<[3, 2, 1]> // [2, 1]
}