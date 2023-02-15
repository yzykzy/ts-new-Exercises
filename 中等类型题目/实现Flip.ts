
/* 
实现仅翻转对象的类型

*/


namespace Flip1 {

  type Flip<T extends Record<PropertyKey, any>> = {
    [P in keyof T as T[P] extends PropertyKey ? T[P] : `${T[P]}`]: P
  }

  type a = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  type b = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  type c = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
}