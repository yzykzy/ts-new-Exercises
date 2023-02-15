/* 
实现Math.trunc的类型版本，它接受字符串或数字，并通过删除任何小数返回数字的整数部分。
*/


namespace trunc {

  type Trunc<T extends number | string> = `${T}` extends `${infer F}.${string}` ? F : `${T}`

  type A = Trunc<12.34> // 12
}