
/* 
通过实现一个 GetMiddleElement 方法，获取数组的中间元素，用数组表示

*/

namespace GetMiddleElement {

  // 判断是否是空
  type IsSingleOrEmpty<T, Acc> = Acc extends [] ? T extends [] | [any] ? true : false : false;

  type GetMiddleElement<T extends any[], Acc extends any[] = []> =
    IsSingleOrEmpty<T, Acc> extends true
    ? T
    : T extends [infer Head, ...infer Rest]
    ? Acc extends [infer AccHead, ...any[]]
    ? [...Acc, any]['length'] extends T['length']
    ? [Head]
    : Acc['length'] extends T['length']
    ? [AccHead, Head]
    : GetMiddleElement<Rest, [Head, ...Acc]>
    : GetMiddleElement<Rest, [Head, ...Acc]>
    : never;



  type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]> // 返回 [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]
}