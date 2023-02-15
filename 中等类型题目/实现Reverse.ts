/* 
实现类型版本的数组反转 Array.reverse
*/


namespace reverse {

  type Reverse<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : T

  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

}