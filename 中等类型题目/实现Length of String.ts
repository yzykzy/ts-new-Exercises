
/* 
计算字符串的长度，类似于 String#length 。



*/


namespace lengthOfString {

  type LengthOfString<S extends string, R extends unknown[] = []> = S extends `${infer H}${infer Rest}` ? LengthOfString<Rest, [...R, H]> : R['length']
}