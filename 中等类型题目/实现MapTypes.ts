/* 

实现MapTypes<T，R>，它将对象T中的类型转换为类型R定义的不同类型，类型R具有以下结构
*/




namespace MapTypes {
  type MapTypes<T, R extends { readonly mapFrom: unknown; readonly mapTo: unknown }> = {
    [K in keyof T]: T[K] extends R['mapFrom'] ? Extract<R, { mapFrom: T[K] }>['mapTo'] : T[K]
  }

  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }
}