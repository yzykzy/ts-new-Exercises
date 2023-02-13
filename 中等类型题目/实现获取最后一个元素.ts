/* 
实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型

*/


namespace Last {

  // type Last<T extends any[]> = T extends [...infer arr, infer last] ? last : never //自己写 

  // 别人的答案
  type LengthOfTuple<T extends any[]> = T extends { length: infer L } ? L : never; // 拿到传进来的值的位置索引

  type DropFirstInTuple<T extends any[]> = ((...args: T) => any) extends (arg: any, ...rest: infer U) => any ? U : never; // 

  type Last<T extends any[]> = T[LengthOfTuple<DropFirstInTuple<T>>];

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type c = DropFirstInTuple<arr1>

  type d = LengthOfTuple<c>

  type tail3 = Last<[() => 123, { a: string }]>
  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
}