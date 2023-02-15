
/* 

实现lodash的_.flip的类型版本。



FlipArguments＜T＞类型需要函数类型T，并返回一个新的函数类型，该函数类型具有相同的返回类型T，但参数相反。


*/

namespace FlipArguments {
  type Reverse<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R] ? [...Reverse<R>, ...U, F] : T

  type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? (...arg: Reverse<A>) => ReturnType<T> : never


  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
  // (arg0: boolean, arg1: number, arg2: string) => void
}