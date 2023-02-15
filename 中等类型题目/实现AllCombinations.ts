
/* 
实现类型AllCombinations＜S＞，返回最多一次使用S中字符的字符串的所有组合。
*/


namespace AllCombinations {

  type StringToUnion<S extends string> = S extends `${infer A}${infer Rest}`
    ? A | StringToUnion<Rest>
    : "";

  type Combinations<T extends string, U = T> = U extends T
    ? U | `${U}${Combinations<Exclude<T, U>>}`
    : never;

  type Combinations1<T extends string, U = T> = U extends T
    ? U | `${U}${Exclude<T, U>}`
    : never;

  type AllCombinations<S extends string> = Combinations<StringToUnion<S>>;

  type a = StringToUnion<'ABC'>
  type b = Exclude<"" | "A" | "B" | "C", "">
  type C = Combinations1<StringToUnion<'ABC'>>
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
}