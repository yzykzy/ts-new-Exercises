/* 
不要使用内置的Readonly<T>，自己实现一个。

该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。

也就是不可以再对该对象的属性赋值。

*/


namespace MyReadonly {

  export type MyReadonly<T> = { readonly [P in keyof T]: T[P] }
  export interface Todo {
    title: string
    description: string
  }

  export const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  // 此处报错是正确的提示
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
}



