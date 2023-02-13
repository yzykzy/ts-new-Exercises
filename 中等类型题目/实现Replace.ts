/* 
实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

*/

namespace Replace {

  type Replace<S extends string, From extends string, To extends string> = S extends `${infer Left}${From extends '' ? never : From}${infer Right}` ? `${Left}${To}${Right}` : S

  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
}