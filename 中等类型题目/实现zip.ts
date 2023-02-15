/* 

在这个挑战中，你应该实现一个类型Zip＜T，U＞，T和U必须是元组
*/



namespace zip {

  // your answers
  type Zip<T extends any[], U extends any[], A extends any[] = []> =
    T extends [] ? [] :
    U[A['length']] extends undefined ? [] :
    T extends [infer l, ...infer r] ?
    [[l, U[A['length']]], ...Zip<r, U, [...A, 1]>] : [];

  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
}