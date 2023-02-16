/* 
请完成类型 Integer<T>，类型 T 继承于 number，如果 T 是一个整数则返回它，否则返回 never。
*/


namespace Integer {

  type Integer<T extends number> = number extends T
    ? never
    : `${T}` extends `${infer R extends number}`
    // Filter decimal
    ? `${T}` extends `${infer I extends number}.${infer D extends number}`
    ? never
    : R
    : never;
}