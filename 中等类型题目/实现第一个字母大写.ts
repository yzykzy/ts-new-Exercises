/* 
实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。

*/

namespace Capitalize {

  type Capitalize<T extends string> = T extends `${infer a}${infer b}` ? `${Uppercase<a>}${b}` : ''

  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
}