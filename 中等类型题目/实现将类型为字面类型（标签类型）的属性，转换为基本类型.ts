/* 

// 将类型为字面类型（标签类型）的属性，转换为基本类型。
*/

namespace personinfo {


  type PersonInfo = { name: 'Tom', age: 30, married: false, addr: { home: '123456', phone: '13111111111' } }
  // 你的答案
  type ToPrimitive<T> = T extends object ? {
    [K in keyof T]: ToPrimitive<T[K]>
  } : T extends { valueOf(): infer R } ? R : T

  type A = ToPrimitive<PersonInfo>
  // 要求结果如下： type PersonInfo = { name: string, age: number, married: boolean, addr: { home: string, phone: string } }
}