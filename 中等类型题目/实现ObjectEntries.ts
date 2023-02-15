/* 

实现Object.entries的类型版本
*/


namespace ObjectEntries {

  type ObjectEntries<T, Key = keyof T> = Key extends keyof T
    ? [Key, T[Key] extends undefined ? T[Key] : Exclude<T[Key], undefined>] : [];

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
}