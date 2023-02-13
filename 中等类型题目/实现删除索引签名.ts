/* 
删除索引签名
实现RemoveIndexSignature＜T＞，从对象类型中排除索引签名。
*/

namespace IndexSignature {

  /*   type RemoveIndexSignature<T> = {
      [K in keyof T as string extends K
      ? never
      : number extends K
      ? never
      : symbol extends K
      ? never
      : K]: T[K];
    }; */

  type RemoveIndexSignature<T> = { [K in keyof T as string extends K ? never : K extends number ? never : K extends symbol ? never : K]: T[K] }

  type Foo = {
    [key: string]: any;
    foo(): void;
  }

  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

}