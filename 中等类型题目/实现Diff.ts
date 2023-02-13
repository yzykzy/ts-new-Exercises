/* 
获取两个接口类型中的差值属性。
*/


namespace Diff {

  type Diff<O, O1> = {
    [P in (keyof Exclude<O, O1> | keyof Exclude<O1, O>)]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
  }

  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }

}