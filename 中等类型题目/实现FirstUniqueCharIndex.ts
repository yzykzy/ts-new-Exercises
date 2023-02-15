/* 
给定字符串s，找到其中的第一个非重复字符并返回其索引。如果不存在，则返回-1。（灵感来自leetcode 387）
*/


namespace FirstUniqueCharIndex {

  // ## First of all, find the repeated char and then check whether the first char is in 'RepeatedChar'.If the first char is repeat, put it in to array, otherwise, we got the unique char and return the length of array.

  export type FindRepeatChar<S extends string, Tmp = "", R = ""> =
    S extends "" ? R : S extends `${infer F}${infer Rest}` ? F extends Tmp ? FindRepeatChar<Rest, Tmp, R | F> : FindRepeatChar<Rest, Tmp | F, R> : never

  export type FirstUniqueCharIndex<S extends string, RepeatedChar = FindRepeatChar<S>, Arr extends string[] = []> =
    S extends "" ? -1 : S extends `${infer F}${infer Rest}` ? F extends RepeatedChar ? FirstUniqueCharIndex<Rest, RepeatedChar, [...Arr, F]> : Arr['length'] : never

  export type epx = FirstUniqueCharIndex<"qwertyuioppoiuytrwq">;
  export type epx2 = FindRepeatChar<"qwertyuioppoiuytrwq">;

}