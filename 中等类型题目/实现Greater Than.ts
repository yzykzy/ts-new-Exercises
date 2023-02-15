
/* 
在这个挑战中，你应该实现一个类型GreaterThan＜T，U＞，比如T＞U



不需要考虑负数。

*/

namespace GreaterThan {

  // 比较数字的大小，必然要转换为字符串来处理
  // 如果数字长度一样，则逐个比较字符大小，如果不一样，则可以转换为比较字符数组长度
  type StringToArray<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []
  type NumberLength<T extends number> = StringToArray<`${T}`>['length']

  type DigitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  // DigitArray 是从小到大，如果 T 首先满足，那么 T 不可能大于 U，当 T 不满足时，即表示 T 大于当前数，继而判断 U，如果 U 满足，那么表示 T 大于 U，否则继续比较下去
  type CompareDigit<T extends string, U extends string, Index extends any[] = []> = T extends DigitArray[Index['length']]
    ? false : U extends DigitArray[Index['length']]
    ? true : CompareDigit<T, U, [...Index, any]>
  type CompareDigitArray<T extends string[], U extends string[]> =
    T extends [infer TF extends string, ...infer TR extends string[]]
    ? U extends [infer UF extends string, ...infer UR extends string[]]
    ? CompareDigit<TF, UF> extends true
    ? true : CompareDigitArray<TR, UR>
    : false
    : false;

  type GreaterThan<T extends number, U extends number> = NumberLength<T> extends NumberLength<U>
    ? CompareDigitArray<StringToArray<`${T}`>, StringToArray<`${U}`>> : GreaterThan<NumberLength<T>, NumberLength<U>>

  type a = GreaterThan<2, 1> //should be true
  type b = GreaterThan<1, 1> //should be false
  type c = GreaterThan<10, 100> //should be false
  type d = GreaterThan<111, 11> //should be true
}