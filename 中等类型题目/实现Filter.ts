
/* 

实现类型Filter＜T，Predicate＞，它接受一个数组T、基元类型或联合基元类型Predicate，并返回一个包含Predicate元素的数组。

*/

namespace Filter {

  type Filter<T extends any[], P, Acc extends unknown[] = []> = T extends [infer F, ...infer R] ?
    F extends P ? Filter<R, P, [...Acc, F]> : Filter<R, P, [...Acc]> : Acc
}

