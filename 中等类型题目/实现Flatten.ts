/* 
在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
*/


/* 
 */


namespace Flatten {

  // your answers
  type Flatten<T extends any[], Result extends any[] = []> =
    T extends [infer left, ...infer reset] ? (left extends any[] ? [...Result, ...Flatten<left, Result>, ...Flatten<reset, Result>] : [left, ...Result, ...Flatten<Result>]) : Result

  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
}