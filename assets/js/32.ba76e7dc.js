(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{578:function(n,t,e){"use strict";e.r(t);var o=e(18),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"递归组件与动态组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#递归组件与动态组件"}},[n._v("#")]),n._v(" 递归组件与动态组件")]),n._v(" "),e("h2",{attrs:{id:"递归组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#递归组件"}},[n._v("#")]),n._v(" 递归组件")]),n._v(" "),e("p",[n._v("递归组件就是指组件在模板中调用自己，开启递归组件的必要条件，就是在组件中设置一个 "),e("code",[n._v("name")]),n._v(" 选项。比如下面的示例：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div>\n    <my-component></my-component>\n  </div>\n</template>\n<script>\n  export default {\n    name: 'my-component'\n  }\n<\/script>\n\n")])])]),e("p",[n._v("在 Webpack 中导入一个 Vue.js 组件，一般是通过 "),e("code",[n._v("import myComponent from 'xxx'")]),n._v(" 这样的语法，然后在当前组件（页面）的 "),e("code",[n._v("components: { myComponent }")]),n._v(" 里注册组件。这种组件是不强制设置 "),e("code",[n._v("name")]),n._v(" 字段的，组件的名字都是使用者在 import 进来后自定义的，但递归组件的使用者是组件自身，它得知道这个组件叫什么，因为没有用 "),e("code",[n._v("components")]),n._v(" 注册，所以 "),e("code",[n._v("name")]),n._v(" 字段就是必须的了。除了递归组件用 "),e("code",[n._v("name")]),n._v("，我们在之前的小节也介绍过，用一些特殊的方法，通过遍历匹配组件的 name 选项来寻找组件实例。")]),n._v(" "),e("p",[n._v("不过呢，上面的示例是有问题的，如果直接运行，会抛出 "),e("code",[n._v("max stack size exceeded")]),n._v(" 的错误，因为组件会无限递归下去，死循环。解决这个问题，就要给递归组件一个限制条件，一般会在递归组件上用 "),e("code",[n._v("v-if")]),n._v(" 在某个地方设置为 "),e("code",[n._v("false")]),n._v(" 来终结。比如我们给上面的示例加一个属性 count，当大于 5 时就不再递归：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n  <div>\n    <my-component :count="count + 1" v-if="count <= 5"></my-component>\n  </div>\n</template>\n<script>\n  export default {\n    name: \'my-component\',\n    props: {\n      count: {\n        type: Number,\n        default: 1\n      }\n    }\n  }\n<\/script>\n\n')])])]),e("p",[n._v("所以，总结下来，实现一个递归组件的必要条件是：")]),n._v(" "),e("ul",[e("li",[n._v("要给组件设置 "),e("strong",[n._v("name")]),n._v("；")]),n._v(" "),e("li",[n._v("要有一个明确的结束条件")])]),n._v(" "),e("p",[n._v("递归组件常用来开发具有未知层级关系的独立组件，在业务开发中很少使用。比如常见的有级联选择器和树形控件：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/22/167398b8f5a828b1?w=1600&h=676&f=png&s=44587",alt:""}})]),n._v(" "),e("p",[n._v("这类组件一般都是数据驱动型的，父级有一个字段 children，然后递归。下一节的实战，会开发一个树形控件 Tree。")]),n._v(" "),e("h2",{attrs:{id:"动态组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态组件"}},[n._v("#")]),n._v(" 动态组件")]),n._v(" "),e("p",[n._v("有的时候，我们希望根据一些条件，动态地切换某个组件，或动态地选择渲染某个组件。在之前小节介绍函数式组件 Functional Render 时，已经说过，它是一个没有上下文的函数，常用于程序化地在多个组件中选择一个。使用 Render 或 Functional Render 可以解决动态切换组件的需求，不过那是基于一个 JS 对象（Render 函数），而 Vue.js 提供了另外一个内置的组件 "),e("code",[n._v("<component>")]),n._v(" 和 "),e("code",[n._v("is")]),n._v(" 特性，可以更好地实现动态组件。")]),n._v(" "),e("p",[n._v("先来看一个 "),e("code",[n._v("<component>")]),n._v(" 和 "),e("code",[n._v("is")]),n._v(" 的基本示例，首先定义三个普通组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!-- a.vue --\x3e\n<template>\n  <div>\n    组件 A\n  </div>\n</template>\n<script>\n  export default {\n\n  }\n<\/script>\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!-- b.vue --\x3e\n<template>\n  <div>\n    组件 B\n  </div>\n</template>\n<script>\n  export default {\n\n  }\n<\/script>\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!-- c.vue --\x3e\n<template>\n  <div>\n    组件 C\n  </div>\n</template>\n<script>\n  export default {\n\n  }\n<\/script>\n\n")])])]),e("p",[n._v("然后在父组件中导入这 3 个组件，并动态切换：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div>\n    <button @click=\"handleChange('A')\">显示 A 组件</button>\n    <button @click=\"handleChange('B')\">显示 B 组件</button>\n    <button @click=\"handleChange('C')\">显示 C 组件</button>\n\n    <component :is=\"component\"></component>\n  </div>\n</template>\n<script>\n  import componentA from '../components/a.vue';\n  import componentB from '../components/b.vue';\n  import componentC from '../components/c.vue';\n\n  export default {\n    data () {\n      return {\n        component: componentA\n      }\n    },\n    methods: {\n      handleChange (component) {\n        if (component === 'A') {\n          this.component = componentA;\n        } else if (component === 'B') {\n          this.component = componentB;\n        } else if (component === 'C') {\n          this.component = componentC;\n        }\n      }\n    }\n  }\n<\/script>\n\n")])])]),e("p",[n._v("这里的 "),e("code",[n._v("is")]),n._v(" 动态绑定的是一个组件对象（Object），它直接指向 a / b / c 三个组件中的一个。除了直接绑定一个 Object，还可以是一个 String，比如标签名、组件名。下面的这个组件，将原生的按钮 button 进行了封装，如果传入了 "),e("code",[n._v("prop: to")]),n._v("，那它会渲染为一个 "),e("code",[n._v("<a>")]),n._v(" 标签，用于打开这个链接地址，如果没有传入 "),e("code",[n._v("to")]),n._v("，就当作普通 button 使用。来看下面的示例：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!-- button.vue --\x3e\n<template>\n  <component :is=\"tagName\" v-bind=\"tagProps\">\n    <slot></slot>\n  </component>\n</template>\n<script>\n  export default {\n    props: {\n      // 链接地址\n      to: {\n        type: String,\n        default: ''\n      },\n      // 链接打开方式，如 _blank\n      target: {\n        type: String,\n        default: '_self'\n      }\n    },\n    computed: {\n      // 动态渲染不同的标签\n      tagName () {\n        return this.to === '' ? 'button' : 'a';\n      },\n      // 如果是链接，把这些属性都绑定在 component 上\n      tagProps () {\n        let props = {};\n\n        if (this.to) {\n          props = {\n            target: this.target,\n            href: this.to\n          }\n        }\n\n        return props;\n      }\n    }\n  }\n<\/script>\n\n")])])]),e("p",[n._v("使用组件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n  <div>\n    <i-button>普通按钮</i-button>\n    <br>\n    <i-button to="https://juejin.im">链接按钮</i-button>\n    <br>\n    <i-button to="https://juejin.im" target="_blank">新窗口打开链接按钮</i-button>\n  </div>\n</template>\n<script>\n  import iButton from \'../components/a.vue\';\n\n  export default {\n    components: { iButton }\n  }\n<\/script>\n\n')])])]),e("p",[n._v("最终会渲染出一个原生的 "),e("code",[n._v("<button>")]),n._v(" 按钮和两个原生的链接 "),e("code",[n._v("<a>")]),n._v("，且第二个点击会在新窗口中打开链接，如图：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/22/167398c004dc0c60?w=328&h=166&f=png&s=18861",alt:""}})]),n._v(" "),e("p",[n._v("i-button 组件中的 "),e("code",[n._v("<component>")]),n._v(" "),e("code",[n._v("is")]),n._v(" 绑定的就是一个标签名称 button / a，并且通过 "),e("code",[n._v("v-bind")]),n._v(" 将一些额外的属性全部绑定到了 "),e("code",[n._v("<component>")]),n._v(" 上。")]),n._v(" "),e("p",[n._v("再回到第一个 a / b / c 组件切换的示例，如果这类的组件，频繁切换，事实上组件是会重新渲染的，比如我们在组件 A 里加两个生命周期：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!-- a.vue --\x3e\n<template>\n  <div>\n    组件 A\n  </div>\n</template>\n<script>\n  export default {\n    mounted () {\n      console.log('组件创建了');\n    },\n    beforeDestroy () {\n      console.log('组件销毁了');\n    }\n  }\n<\/script>\n\n")])])]),e("p",[n._v("只要切换到 A 组件，"),e("code",[n._v("mounted")]),n._v(" 就会触发一次，切换到其它组件，"),e("code",[n._v("beforeDestroy")]),n._v(" 也会触发一次，说明组件再重新渲染，这样有可能导致性能问题。为了避免组件的重复渲染，可以在 "),e("code",[n._v("<component>")]),n._v(" 外层套一个 Vue.js 内置的 "),e("code",[n._v("<keep-alive>")]),n._v(" 组件，这样，组件就会被缓存起来：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<keep-alive>\n  <component :is="component"></component>\n</keep-alive>\n\n')])])]),e("p",[n._v("这时，只有 "),e("code",[n._v("mounted")]),n._v(" 触发了，如果不离开当前页面，切换到其它组件，"),e("code",[n._v("beforeDestroy")]),n._v(" 不会被触发，说明组件已经被缓存了。")]),n._v(" "),e("p",[n._v("keep-alive 还有一些额外的 props 可以配置：")]),n._v(" "),e("ul",[e("li",[e("code",[n._v("include")]),n._v("：字符串或正则表达式。只有名称匹配的组件会被缓存。")]),n._v(" "),e("li",[e("code",[n._v("exclude")]),n._v("：字符串或正则表达式。任何名称匹配的组件都不会被缓存。")]),n._v(" "),e("li",[e("code",[n._v("max")]),n._v("：数字。最多可以缓存多少组件实例。")])]),n._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[n._v("#")]),n._v(" 结语")]),n._v(" "),e("p",[n._v("还有一类是异步组件，Vue.js 文档已经介绍的很清楚了，可以阅读文末的扩展阅读 1。事实上异步组件我们用的很多，比如 router 的配置列表，一般都是用的异步组件形式：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("{\n  path: '/form',\n  component: () => import('./views/form.vue')\n}\n\n")])])]),e("p",[n._v("这样每个页面才会在路由到时才加载对应的 JS 文件，否则入口文件会非常庞大。")]),n._v(" "),e("p",[n._v("递归组件、动态组件和异步组件是 Vue.js 中相对冷门的 3 种组件模式，不过在封装复杂的独立组件时，前两者会经常使用。")]),n._v(" "),e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[n._v("#")]),n._v(" 扩展阅读")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[n._v("异步组件"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);