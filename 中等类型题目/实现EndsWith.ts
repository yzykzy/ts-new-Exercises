/* 

实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false
*/

namespace EndsWith {

  type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false

  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
}