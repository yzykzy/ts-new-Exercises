/* 

实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。

*/


namespace Parameters {

  type MyParameters<T extends (...arg: any[]) => any> = T extends (...arg: infer P) => any ? P : never

  const foo = (arg1: string, arg2: number): void => { }

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

}