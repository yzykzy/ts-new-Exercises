/* 

不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。

Omit 会创建一个省略 K 中字段的 T 对象

*/

namespace Omit {

  type MyOmit<T, U extends keyof T> = { [P in keyof T as P extends U ? never : P]: T[P] }

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
}