/* 
实现一个通用的类型 Mutable<T>，使类型 T 的全部属性可变（非只读）。

*/

namespace Mutable {


  type Mutable<T> = { -readonly [k in keyof T]: T[k] }

  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }

  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

}