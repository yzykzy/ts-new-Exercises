/* 

Block，Element，Modifier方法（BEM）是CSS中类的一种流行命名约定。



例如，块组件将表示为btn，依赖于块的元素将表示为btn_price，更改块样式的修饰符将表示为“btn-big”或“btn_price”警告。



实现BEM＜B，E，M＞，它从这三个参数生成字符串并集。其中B是字符串文字，E和M是字符串数组（可以为空）
*/

namespace BEM {

  type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends []
    ? ''
    : { [K in keyof E]: `__${E[K]}` }[number]}${M extends [] ? '' : { [K in keyof M]: `--${M[K]}` }[number]}`

}

