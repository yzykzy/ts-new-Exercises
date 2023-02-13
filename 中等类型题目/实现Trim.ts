/* 
实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
*/


namespace Trim {
  type Whitespace = ' ' | '\n' | '\t'

  type Trim<T extends string> = T extends `${Whitespace}${infer Rest}` | `${infer Rest}${Whitespace}`
    ? Trim<Rest>
    : T

  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'


}