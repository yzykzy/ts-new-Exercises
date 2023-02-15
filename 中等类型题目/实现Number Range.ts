/* 
有时我们想限制数字的范围。。。
*/


namespace numberRange {

  // your answers
  type BuildArray<
    Length extends number,
    FillVal = unknown,
    Arr extends unknown[] = []
  > = Arr['length'] extends Length ? Arr : BuildArray<Length, FillVal, [...Arr, FillVal]>;

  type NumberRange<L extends number, H extends number, A = L, Acc extends unknown[] = BuildArray<L>> =
    Acc['length'] extends H ? A : NumberRange<L, H, A | [...Acc, unknown]['length'], [...Acc, unknown]>


  type result = NumberRange<2, 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

}