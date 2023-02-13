/* 

键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组
*/

namespace promiseAll {
  declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [k in keyof T]: Awaited<T[k]>
  }>
  // type PromiseAll<T extends PromiseLike> =

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)

  console.log(p)
}