/* 

实现替换联合类型中的键的类型ReplaceKeys，如果某些类型没有此键，只需跳过替换，a类型需要三个参数。
*/


namespace replaceKeys {

  type ReplaceKeys<U, T, Y> = {
    [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P];
  };


  type NodeA = {
    type: 'A'
    name: string
    flag: number
  }

  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }

  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }

  type Nodes = NodeA | NodeB | NodeC

  type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number, flag: string }> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

  type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
}