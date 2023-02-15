/* 
实现 TrimRight<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。

*/


namespace TrimRight {

  type Whitespace = ' ' | '\n' | '\t'

  type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}`
    ? TrimRight<Rest>
    : S

  type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'
}