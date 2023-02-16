
/* 

如果列表的所有元素都等于传入的第二个参数，则返回true；如果存在任何不匹配，则返回false。
*/



namespace All {
  type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

  // your answers
  type All<T extends unknown[], K> = Equals<T[number], K>

  type Test1 = [1, 1, 1]
  type Test2 = [1, 1, 2]

  type Todo = All<Test1, 1> // should be same as true
  type Todo2 = All<Test2, 1> // should be same as false

}