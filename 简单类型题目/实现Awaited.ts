/* 
假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

例如：Promise<ExampleType>，请你返回 ExampleType 类型。

*/

namespace Awaited {
  //  用递归来判断是否属于promise 是的再次进入，不是返回
  type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T

  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
}