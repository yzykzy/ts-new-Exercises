/* 
实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。

K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。

*/


namespace RequiredByKeys {

  type Merge<T> = { [k in keyof T]: T[k] }

  type RequiredByKeys<T, U> = Merge<{ [k in keyof T as k extends U ? k : never]-?: T[k] } & { [k in keyof T as k extends U ? never : k]?: T[k] }>

  interface User {
    name?: string
    age?: number
    address?: string
  }

  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

}