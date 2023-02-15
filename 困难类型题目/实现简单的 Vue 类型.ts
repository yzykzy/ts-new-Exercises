/* 
实现类似Vue的类型支持的简化版本。

通过提供一个函数SimpleVue（类似于Vue.extend或defineComponent），它应该正确地推断出 computed 和 methods 内部的this类型。

在此挑战中，我们假设SimpleVue接受只带有data，computed和methods字段的Object作为其唯一的参数，

data是一个简单的函数，它返回一个提供上下文this的对象，但是你无法在data中获取其他的计算属性或方法。

computed是将this作为上下文的函数的对象，进行一些计算并返回结果。在上下文中应暴露计算出的值而不是函数。

methods是函数的对象，其上下文也为this。函数中可以访问data，computed以及其他methods中的暴露的字段。 computed与methods的不同之处在于methods在上下文中按原样暴露为函数。

SimpleVue的返回值类型可以是任意的。
*/


namespace vue {
  type Computed<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : T[K]
  }

  interface Options<D, C, M> {
    data?: () => D
    computed?: C & ThisType<D & Computed<C> & M>
    methods?: M & ThisType<D & Computed<C> & M>
  }

  declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any

  const instance = SimpleVue({
    data() {
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return this.firstname + ' ' + this.lastname
      }
    },
    methods: {
      hi() {
        alert(this.fullname.toLowerCase())
      }
    }
  })
}