// 函数柯里化利用函数的递归和闭包完成

const curry = function (fn) {
  const len = fn.length
  // curry 返回被改造的函数
  return function t () {
    // 获取t的实参个数
    const innerLength = arguments.length
    // 将类数组arguments对象转为真正的数组（类数组arguments对象是函数传入的实际参数，类似数组，拥有数组属性，但不是数组）
    const args = Array.prototype.slice.call(arguments)
    if (innerLength >= len) { //递归出口，如果t实参个数已经大于fn形参个数,则终止递归
      return fn.apply(undefined, args) //在非严格模式下 apply 第一个参数为null | undefined this对象会变为全局变量 window
    } else { // 如果t的实参个数少于fn的形参个数，说明柯里化并没有完成，则继续执行柯里化
      return function () {
        const innerArgs = Array.prototype.slice.call(arguments)
        const allArgs = args.concat(innerArgs)
        return t.apply(undefined, allArgs)
      }

    }

  }
}

// 测试
function add (num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}


const finalFun = curry(add);
const result1 = finalFun(1)(2)(3)(4)(5);
const result2 = finalFun(1, 2)(3)(4)(5);
const result3 = finalFun(1, 2, 3)(4)(5);
const result4 = finalFun(1, 2, 3)(4, 5);

console.log(result1, result2, result3, result4);