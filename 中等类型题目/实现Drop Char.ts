/* 

从字符串中剔除指定字符。
*/

namespace DropChart {

  type DropChar<T extends string, U extends string> = T extends `${infer F}${infer R}` ? F extends U ? `${''}${DropChar<R, U>}` : `${F}${DropChar<R, U>}` : T

  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
}