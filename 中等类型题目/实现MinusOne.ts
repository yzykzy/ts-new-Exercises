/* 

给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
*/


namespace MinusOne {
  // your answers
  type NumberLiteral = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

  type MinusOneMap = {
    "0": "9";
    "1": "0";
    "2": "1";
    "3": "2";
    "4": "3";
    "5": "4";
    "6": "5";
    "7": "6";
    "8": "7";
    "9": "8";
  };

  // 字符串相关的工具函数
  type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${ReverseString<Rest>}${First}`
    : "";

  type RemoveLeadingZeros<S extends string> = S extends "0"
    ? S
    : S extends `${"0"}${infer R}`
    ? RemoveLeadingZeros<R>
    : S;

  type Initial<T extends string> =
    ReverseString<T> extends `${infer First}${infer Rest}`
    ? ReverseString<Rest>
    : T;

  type ParseInt<T extends string> =
    RemoveLeadingZeros<T> extends `${infer Digit extends number}` ? Digit : never;

  type MinusOneForString<S extends string> =
    S extends `${Initial<S>}${infer Last extends NumberLiteral}`
    ? Last extends "0"
    ? `${MinusOneForString<Initial<S>>}${MinusOneMap[Last]}`
    : `${Initial<S>}${MinusOneMap[Last]}`
    : never;

  type MinusOne<T extends number> = T extends 0
    ? -1
    : ParseInt<MinusOneForString<`${T}`>>;


  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
}