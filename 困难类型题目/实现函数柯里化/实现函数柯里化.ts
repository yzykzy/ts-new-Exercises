
/* 
Currying 是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术
传递给 Currying 的函数可能有多个参数，您需要正确键入它。

在此挑战中，curried 函数一次仅接受一个参数。分配完所有参数后，它应返回其结果。
*/

namespace currying {
  //一开始没想到用 Rest extends [] 的方法来判断无剩余参数。。但是想到了用 Rest['length'] extends 0

  type CurryingFn<F extends Function> = F extends (first: infer First, ...remaining: infer Rest) => infer Ret
    ? Rest['length'] extends 0
    ? F
    : (first: First) => CurryingFn<(...args: Rest) => Ret>
    : never

  declare function Currying<F extends Function>(fn: F): CurryingFn<F>

  const add = (a: number, b: number) => a + b
  const three = add(1, 2)

  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
}