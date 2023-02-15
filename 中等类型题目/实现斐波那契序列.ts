

/* 

实现一个通用的Fibonacci＜T＞，它接受一个数字T并返回它对应的Fibonaci数。



序列开始：1、1、2、3、5、8、13、21、34、55、89、144。。。

*/


namespace Fibonacci {

  // 1: Cur = default value = [1]
  // 2: Cur = Last Pre = [1]
  // 3: Cur = Last Pre = [...[1], ...[1]] = [1,1]
  // 4: Cur = Last Pre = [...[1,1], ...[1]] = [1,1,1]
  // Cur is the Last Pre
  type Fibonacci<T extends number, N extends unknown[] = [1], Cur extends unknown[] = [1], Pre extends unknown[] = [1]> =
    N['length'] extends T
    ? Cur['length']
    : Fibonacci<T, [...N, 1], Pre, [...Pre, ...Cur]>

  // 3 , [1,1] , [1] [1,1]  | 3 , [1,1,1] ,[1,1] , [1,1,1]

  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
}