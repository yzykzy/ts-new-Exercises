/* 
给定一个字符串数组，执行排列和组合。它也适用于视频控件列表等道具类型
*/



namespace combination {

  type Filter<T, U> = T extends []
    ? []
    : T extends [infer Head, ...infer Tail]
    ? Head extends U
    ? Filter<Tail, U>
    : [Head, ...Filter<Tail, U>]
    : never

  type Combination<T extends string[]> = T extends []
    ? never
    : { [K in keyof T]: T[K] | `${T[K]} ${Combination<Filter<T, T[K]>>}` }[number]


  type Keys = Combination<['foo', 'bar', 'baz']>

  /*  expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | 
"foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"` */
}