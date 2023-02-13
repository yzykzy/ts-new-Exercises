/* 
实现 TS 内置的 Pick<T, K>，但不可以使用它。

从类型 T 中选择出属性 K，构造成一个新的类型。

*/

namespace MyPick {
  export type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

  export interface Todo {
    title: string
    description: string
    completed: boolean
  }

  export type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  export const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  }
}


