/* 

从T中选择一组类型可分配给U的财产。
*/



namespace PickByType {

  type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }

  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
}