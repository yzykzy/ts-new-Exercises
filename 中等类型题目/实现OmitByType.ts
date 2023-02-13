/* 

从T中保留符合给定了U类型的属性

*/



namespace OmitByType {

  type OmitByType<T, U> = { [k in keyof T as T[k] extends U ? k : never]: T[k] }


  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
}