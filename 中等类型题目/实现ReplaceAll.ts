/* 

实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
*/

namespace ReplaceAll {
  type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Left}${From extends '' ? never : From}${infer Right}`
    ? `${Left}${To}${ReplaceAll<Right, From, To>}` : S
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
}
