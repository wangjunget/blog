(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{568:function(e,n,t){"use strict";t.r(n);var a=t(18),d=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"实战-7-树形控件-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战-7-树形控件-tree"}},[e._v("#")]),e._v(" 实战 7：树形控件——Tree")]),e._v(" "),t("p",[e._v("本小节基于 Vue.js 的递归组件知识，来开发一个常见的树形控件—Tree。")]),e._v(" "),t("p",[e._v("Tree 组件是递归类组件的典型代表，它常用于文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),e._v(" "),t("p",[e._v("本节要实现的 Tree 组件具有以下功能：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/27/16753fd7a86231b6?w=428&h=364&f=gif&s=112651",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("节点可以无限延伸（递归）；")]),e._v(" "),t("li",[e._v("可以展开 / 收起子节点；")]),e._v(" "),t("li",[e._v("节点可以选中，选中父节点，它的所有子节点也全部被选中，同样，反选父节点，其所有子节点也取消选择；")]),e._v(" "),t("li",[e._v("同一级所有子节点选中时，它的父级也自动选中，一直递归判断到根节点。")])]),e._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),t("p",[e._v("Tree 是典型的数据驱动型组件，所以节点的配置就是一个 data，里面描述了所有节点的信息，比如图片中的示例数据为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("data: [\n  {\n    title: 'parent 1',\n    expand: true,\n    children: [\n      {\n        title: 'parent 1-1',\n        expand: true,\n        children: [\n          {\n            title: 'leaf 1-1-1'\n          },\n          {\n            title: 'leaf 1-1-2'\n          }\n        ]\n      },\n      {\n        title: 'parent 1-2',\n        children: [\n          {\n            title: 'leaf 1-2-1'\n          },\n          {\n            title: 'leaf 1-2-1'\n          }\n        ]\n      }\n    ]\n  }\n]\n\n")])])]),t("p",[e._v("每个节点的配置（props：data）描述如下：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("title")]),e._v("：节点标题（本例为纯文本输出，可参考 Table 的 Render 或 slot-scope 将其扩展）；")]),e._v(" "),t("li",[t("strong",[e._v("expand")]),e._v("：是否展开直子节点。开启后，其直属子节点将展开；")]),e._v(" "),t("li",[t("strong",[e._v("checked")]),e._v("：是否选中该节点。开启后，该节点的 Checkbox 将选中；")]),e._v(" "),t("li",[t("strong",[e._v("children")]),e._v("：子节点属性数组。")])]),e._v(" "),t("p",[e._v("如果一个节点没有 children 字段，那它就是最后一个节点，这也是递归组件终结的判断依据。")]),e._v(" "),t("p",[e._v("同时再提供一个是否显示多选框的 props：showCheckbox，以及两个 events：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("on-toggle-expand")]),e._v("：展开和收起子列表时触发；")]),e._v(" "),t("li",[t("strong",[e._v("on-check-change")]),e._v("：点击复选框时触发。")])]),e._v(" "),t("p",[e._v("因为是数据驱动，组件的 API 都比较简单，这一点跟 Table 组件是一样的，它们复杂的逻辑都在组件本身。")]),e._v(" "),t("h2",{attrs:{id:"入口-tree-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口-tree-vue"}},[e._v("#")]),e._v(" 入口 tree.vue")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("src/components")]),e._v(" 中新建目录 "),t("code",[e._v("tree")]),e._v("，并在 tree 下创建两个组件 "),t("code",[e._v("tree.vue")]),e._v(" 和 "),t("code",[e._v("node.vue")]),e._v("。tree.vue 是组件的入口，用于接收和处理数据，并将数据传递给 node.vue；node.vue 就是一个递归组件，它构成了每一个"),t("strong",[e._v("节点")]),e._v("，即一个可展开 / 关闭的按钮（+或-）、一个多选框（使用第 7 节的 Checkbox 组件）、节点标题以及递归的下一级节点。可能现在听起来比较困惑，不要慌，下面逐一分解。")]),e._v(" "),t("p",[e._v("tree.vue 主要负责两件事：")]),e._v(" "),t("ol",[t("li",[e._v("定义了组件的入口，即组件的 API；")]),e._v(" "),t("li",[e._v("对接收的数据 props：data 初步处理，为了在 tree.vue 中不破坏使用者传递的源数据 data，所以会克隆一份数据（cloneData）。")])]),e._v(" "),t("p",[e._v("因为传递的数据 data 是一个复杂的数组结构，克隆它要使用深拷贝，因为浅拷贝数据仍然是引用关系，会破坏源数据。所以在工具集 "),t("code",[e._v("src/utils/assist.js")]),e._v(" 中新加一个深拷贝的工具函数 "),t("code",[e._v("deepCopy")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// assist.js，部分代码省略\nfunction typeOf(obj) {\n  const toString = Object.prototype.toString;\n  const map = {\n    '[object Boolean]'  : 'boolean',\n    '[object Number]'   : 'number',\n    '[object String]'   : 'string',\n    '[object Function]' : 'function',\n    '[object Array]'    : 'array',\n    '[object Date]'     : 'date',\n    '[object RegExp]'   : 'regExp',\n    '[object Undefined]': 'undefined',\n    '[object Null]'     : 'null',\n    '[object Object]'   : 'object'\n  };\n  return map[toString.call(obj)];\n}\n// deepCopy\nfunction deepCopy(data) {\n  const t = typeOf(data);\n  let o;\n\n  if (t === 'array') {\n    o = [];\n  } else if ( t === 'object') {\n    o = {};\n  } else {\n    return data;\n  }\n\n  if (t === 'array') {\n    for (let i = 0; i < data.length; i++) {\n      o.push(deepCopy(data[i]));\n    }\n  } else if ( t === 'object') {\n    for (let i in data) {\n      o[i] = deepCopy(data[i]);\n    }\n  }\n  return o;\n}\n\nexport {deepCopy};\n\n")])])]),t("p",[e._v("deepCopy 函数会递归地对数组或对象进行逐一判断，如果某项是数组或对象，再拆分继续判断，而其它类型就直接赋值了，所以深拷贝的数据不会破坏原有的数据（更多深拷贝与浅拷贝的内容，可阅读扩展阅读 1）。")]),e._v(" "),t("p",[e._v("先来看 tree.vue 的代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- src/components/tree/tree.vue --\x3e\n<template>\n  <div>\n    <tree-node\n      v-for="(item, index) in cloneData"\n      :key="index"\n      :data="item"\n      :show-checkbox="showCheckbox"\n    ></tree-node>\n  </div>\n</template>\n<script>\n  import TreeNode from \'./node.vue\';\n  import { deepCopy } from \'../../utils/assist.js\';\n\n  export default {\n    name: \'Tree\',\n    components: { TreeNode },\n    props: {\n      data: {\n        type: Array,\n        default () {\n          return [];\n        }\n      },\n      showCheckbox: {\n        type: Boolean,\n        default: false\n      }\n    },\n    data () {\n      return {\n        cloneData: []\n      }\n    },\n    created () {\n      this.rebuildData();\n    },\n    watch: {\n      data () {\n        this.rebuildData();\n      }\n    },\n    methods: {\n      rebuildData () {\n        this.cloneData = deepCopy(this.data);\n      }\n    }\n  }\n<\/script>\n\n')])])]),t("p",[e._v("在组件 created 时（以及 watch 监听 data 改变时），调用了 "),t("code",[e._v("rebuildData")]),e._v(" 方法克隆源数据，并赋值给了 "),t("code",[e._v("cloneData")]),e._v("。")]),e._v(" "),t("p",[e._v("在 template 中，先是渲染了一个 node.vue 组件（"),t("code",[e._v("<tree-node>")]),e._v("），这一级是 Tree 的根节点，因为 cloneDate 是一个数组，所以这个根节点不一定只有一项，有可能是并列的多项。不过这里使用的 node.vue 还没有用到 Vue.js 的递归组件，它只处理第一级根节点。")]),e._v(" "),t("p",[t("code",[e._v("<tree-node>")]),e._v(" 组件（node.vue）接收两个 props：")]),e._v(" "),t("ol",[t("li",[e._v("showCheckbox：与 tree.vue 的 showCheckbox 相同，只是进行传递；")]),e._v(" "),t("li",[e._v("data：node.vue 接收的 data 是一个 Object 而非 Array，因为它只负责渲染当前的一个节点，并递归渲染下一个子节点（即 children），所以这里对 cloneData 进行循环，将每一项节点数据赋给了 tree-node。")])]),e._v(" "),t("h2",{attrs:{id:"递归组件-node-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归组件-node-vue"}},[e._v("#")]),e._v(" 递归组件 node.vue")]),e._v(" "),t("p",[e._v("node.vue 是树组件 Tree 的核心，而一个 tree-node 节点包含 4 个部分：")]),e._v(" "),t("ol",[t("li",[e._v("展开与关闭的按钮（+或-）；")]),e._v(" "),t("li",[e._v("多选框；")]),e._v(" "),t("li",[e._v("节点标题；")]),e._v(" "),t("li",[e._v("递归子节点。")])]),e._v(" "),t("p",[e._v("先来看 node.vue 的基本结构：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\x3c!-- src/components/tree/node.vue --\x3e\n<template>\n  <ul class="tree-ul">\n    <li class="tree-li">\n      <span class="tree-expand" @click="handleExpand">\n        <span v-if="data.children && data.children.length && !data.expand">+</span>\n        <span v-if="data.children && data.children.length && data.expand">-</span>\n      </span>\n      <i-checkbox\n        v-if="showCheckbox"\n        :value="data.checked"\n        @input="handleCheck"\n      ></i-checkbox>\n      <span>{{ data.title }}</span>\n      <tree-node\n        v-if="data.expand"\n        v-for="(item, index) in data.children"\n        :key="index"\n        :data="item"\n        :show-checkbox="showCheckbox"\n      ></tree-node>\n    </li>\n  </ul>\n</template>\n<script>\n  import iCheckbox from \'../checkbox/checkbox.vue\';\n\n  export default {\n    name: \'TreeNode\',\n    components: { iCheckbox },\n    props: {\n      data: {\n        type: Object,\n        default () {\n          return {};\n        }\n      },\n      showCheckbox: {\n        type: Boolean,\n        default: false\n      }\n    }\n  }\n<\/script>\n<style>\n  .tree-ul, .tree-li{\n    list-style: none;\n    padding-left: 10px;\n  }\n  .tree-expand{\n    cursor: pointer;\n  }\n</style>\n\n')])])]),t("p",[t("code",[e._v("props：data")]),e._v(" 包含了当前节点的所有信息，比如是否展开子节点（expand）、是否选中（checked）、子节点数据（children）等。")]),e._v(" "),t("p",[e._v("第一部分 expand，如果当前节点不含有子节点，也就是没有 children 字段或 children 的长度是 0，那就说明当前节点已经是最后一级节点，所以不含有展开 / 收起的按钮。")]),e._v(" "),t("p",[e._v("多选框直接使用了第 7 节的 Checkbox 组件（单用模式），这里将 prop: value 和事件 @input 分开绑定，没有使用 "),t("code",[e._v("v-model")]),e._v(" 语法糖。value 绑定的数据 "),t("code",[e._v("data.checked")]),e._v(" 表示当前节点是否选中，在点击多选框时，handleCheck 方法会修改 data.checked 数据，下文会分析。这里之所以不使用 "),t("code",[e._v("v-model")]),e._v(" 而是分开绑定，是因为 @input 里要额外做一些处理，不是单纯的修改数据。")]),e._v(" "),t("p",[e._v("上一节我们说到，一个 Vue.js 递归组件有两个必要条件：name 特性和终结条件。name 已经指定为 "),t("code",[e._v("TreeNode")]),e._v("，而这个终结递归的条件，就是 "),t("code",[e._v('v-for="(item, index) in data.children"')]),e._v("，当 "),t("code",[e._v("data.children")]),e._v(" 不存在或为空数组时，自然就不会继续渲染子节点，递归也就停止了。")]),e._v(" "),t("p",[e._v("注意，这里的 "),t("code",[e._v('v-if="data.expand"')]),e._v(" 并不是递归组件的终结条件，虽然它看起来像是一个可以为 "),t("code",[e._v("false")]),e._v(" 的判断语句，但它的用处是判断当前节点"),t("strong",[e._v("的子节点")]),e._v("是否展开（渲染），如果当前节点不展开，那它所有的子节点也就不会展开（渲染）。")]),e._v(" "),t("p",[e._v("上面的代码保留了两个方法 "),t("code",[e._v("handleExpand")]),e._v(" 与 "),t("code",[e._v("handleCheck")]),e._v("，先来看前者。")]),e._v(" "),t("p",[e._v("点击 + 号时，会展开直属子节点，点击 - 号关闭，这一步只需在 "),t("code",[e._v("handleExpand")]),e._v(" 中修改 data 的 expand 数据即可，同时，我们通过 Tree 的根组件（tree.vue）触发一个自定义事件 "),t("code",[e._v("@on-toggle-expand")]),e._v("（上文已介绍）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// node.vue，部分代码省略\nimport { findComponentUpward } from '../../utils/assist.js';\n\nexport default {\n  data () {\n    return {\n      tree: findComponentUpward(this, 'Tree')\n    }\n  },\n  methods: {\n    handleExpand () {\n      this.$set(this.data, 'expand', !this.data.expand);\n\n      if (this.tree) {\n        this.tree.emitEvent('on-toggle-expand', this.data);\n      }\n    },\n  }\n}\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// tree.vue，部分代码省略\nexport default {\n  methods: {\n    emitEvent (eventName, data) {\n      this.$emit(eventName, data, this.cloneData);\n    }\n  }\n}\n\n")])])]),t("p",[e._v("在 node.vue 中，通过 "),t("code",[e._v("findComponentUpward")]),e._v(" 向上找到了 Tree 的实例，并调用它的 "),t("code",[e._v("emitEvent")]),e._v(" 方法来触发自定义事件 "),t("code",[e._v("@on-toggle-expand")]),e._v("。之所以使用 "),t("code",[e._v("findComponentUpward")]),e._v(" 寻找组件，而不是用 "),t("code",[e._v("$parent")]),e._v("，是因为当前的 node.vue，它的父级不一定就是 tree.vue，因为它是递归组件，父级有可能还是自己。")]),e._v(" "),t("p",[e._v("这里有一点需要注意，修改 data.expand，我们是通过 Vue 的 "),t("code",[e._v("$set")]),e._v(" 方法来修改，并没有像下面这样修改：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("this.data.expand = !this.data.expand;\n\n")])])]),t("p",[e._v("这样有什么区别呢？如果直接用上面这行代码修改，发现数据虽然被修改了，但是视图并没有更新（原来是 + 号，点击后还是 + 号）。要理解这里，我们先看下，到底修改了什么。这里的 "),t("code",[e._v("this.data")]),e._v("，是一个 props，它是通过上一级传递的，这个上一级有两种可能，一种是递归的 node.vue，一种是根组件 tree.vue，但是递归的 node.vue，最终也是由 tree.vue 传递的，追根溯源，要修改的 "),t("code",[e._v("this.data")]),e._v(" 事实上是 tree.vue 的 "),t("code",[e._v("cloneData")]),e._v("。cloneData 里的节点数据，是不一定含有 "),t("code",[e._v("expand")]),e._v(" 或 "),t("code",[e._v("checked")]),e._v(" 字段的，如果不含有，直接通过 "),t("code",[e._v("this.data.expand")]),e._v(" 修改，这个 expand 就不是可响应的数据，Vue.js 是无法追踪到它的变化，视图自然不会更新，而 "),t("code",[e._v("$set")]),e._v(" 的用法就是对可响应对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。总结来说，如果 expand 字段一开始是存在的（不管 true 或 false），不管用哪种方式修改都是可以的，否则必须用 "),t("code",[e._v("$set")]),e._v(" 修改，结合起来，干脆直接用 $set 了。同理，后文的 "),t("code",[e._v("checked")]),e._v(" 也是一样。")]),e._v(" "),t("p",[e._v("接下来是整个 Tree 组件最复杂的一部分，就是处理节点的响应状态。你可能会问，不就是选中或取消选中吗，跟 expand 一样，修改数据就行了？如果只是考虑一个节点，的确这样就可以了，但树组件是有上下级关系的，它们分为两种逻辑，当选中（或取消选中）一个节点时：")]),e._v(" "),t("ol",[t("li",[e._v("它下面的所有子节点都会被选中；")]),e._v(" "),t("li",[e._v("如果同一级所有子节点选中时，它的父级也自动选中，一直递归判断到根节点。")])]),e._v(" "),t("p",[e._v("第 1 个逻辑相对简单，当选中一个节点时，只要递归地遍历它下面所属的所有子节点数据，修改所有的 "),t("code",[e._v("checked")]),e._v(" 字段即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// node.vue，部分代码省略\nexport default {\n  methods: {\n    handleCheck (checked) {\n      this.updateTreeDown(this.data, checked);\n\n      if (this.tree) {\n        this.tree.emitEvent('on-check-change', this.data);\n      }\n    },\n    updateTreeDown (data, checked) {\n      this.$set(data, 'checked', checked);\n\n      if (data.children && data.children.length) {\n        data.children.forEach(item => {\n          this.updateTreeDown(item, checked);\n        });\n      }\n    }\n  }\n}\n\n")])])]),t("p",[e._v("updateTreeDown 只是向下修改了所有的数据，因为当前节点的数据里，是包含其所有子节点数据的，通过递归遍历可以轻松修改，这也是第 1 种逻辑简单的原因。")]),e._v(" "),t("p",[e._v("再来看第 2 个逻辑，它的难点在于，无法通过当前节点数据，修改到它的父节点，因为拿不到。写到这里，正常的思路应该是在 "),t("code",[e._v("this.updateTreeDown(this.data, checked);")]),e._v(" 的下面再写一个 "),t("code",[e._v("updateTreeUp")]),e._v(" 的方法，向上遍历，问题就是，怎样向上遍历，一种常规的思路是，把 "),t("code",[e._v("updateTreeUp")]),e._v(" 方法写在 tree.vue 里，并且在 node.vue 的 "),t("code",[e._v("handleCheck")]),e._v(" 方法里，通过 this.tree 调用根组件的 "),t("code",[e._v("updateTreeUp")]),e._v("，并且传递当前节点的数据，在 tree.vue 里，要找到当前节点的位置，那还需要一开始在 cloneData 里预先给每个节点设置一个唯一的 key，后面的逻辑读者应该能想到了，就是通过 key 找到节点位置，并向上递归判断……但是，这个方法想着就麻烦。")]),e._v(" "),t("p",[e._v("正常的思路不太好解决，我们就换个思路。一个节点，除了手动选中（或反选），还有就是第 2 种逻辑的被动选中（或反选），也就是说，如果这个节点的所有直属子节点（就是它的第一级子节点）都选中（或反选）时，这个节点就自动被选中（或反选），递归地，可以一级一级响应上去。有了这个思路，我们就可以通过 "),t("code",[e._v("watch")]),e._v(" 来监听当前节点的子节点是否都选中，进而修改当前的 "),t("code",[e._v("checked")]),e._v(" 字段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// node.vue，部分代码省略\nexport default {\n  watch: {\n    'data.children': {\n      handler (data) {\n        if (data) {\n          const checkedAll = !data.some(item => !item.checked);\n          this.$set(this.data, 'checked', checkedAll);\n        }\n      },\n      deep: true\n    }\n  }\n}\n\n")])])]),t("p",[e._v("在 watch 中，监听了 data.children 的改变，并且是深度监听的。这段代码的意思是，当 "),t("code",[e._v("data.children")]),e._v(" 中的数据的某个字段发生变化时（这里当然是指 checked 字段）,也就是说它的某个子节点被选中（或反选）了，这时执行绑定的句柄 handler 中的逻辑。"),t("code",[e._v("const checkedAll = !data.some(item => !item.checked);")]),e._v(" 也是一个巧妙的缩写，checkedAll 最终返回结果就是当前子节点是否都被选中了。")]),e._v(" "),t("p",[e._v("这里非常巧妙地利用了递归的特性，因为 node.vue 是一个递归组件，那每一个组件里都会有 watch 监听 "),t("code",[e._v("data.children")]),e._v("，要知道，当前的节点有两个”身份“，它既是下属节点的父节点，同时也是上级节点的子节点，它作为下属节点的父节点被修改的同时，也会触发上级节点中的 watch 监听函数。"),t("strong",[e._v("这就是递归")]),e._v("。")]),e._v(" "),t("p",[e._v("以上就是 Tree 组件的所有内容，完整的代码见： "),t("a",{attrs:{href:"https://github.com/icarusion/vue-component-book/tree/master/src/components/tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/icarusion/vue-component-book/tree/master/src/components/tree"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("用例："),t("a",{attrs:{href:"https://github.com/icarusion/vue-component-book/blob/master/src/views/tree.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/icarusion/vue-component-book/blob/master/src/views/tree.vue"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),t("p",[e._v("递归就像人类繁衍一样，蕴藏了无限可能，充满着神奇与智慧。")]),e._v(" "),t("h2",{attrs:{id:"扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[e._v("#")]),e._v(" 扩展阅读")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b5dcf8351882519790c9a2e",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅拷贝与深拷贝"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("注：本节部分代码参考 "),t("a",{attrs:{href:"https://github.com/iview/iview/blob/2.0/src/utils/assist.js#L114",target:"_blank",rel:"noopener noreferrer"}},[e._v("iView"),t("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);n.default=d.exports}}]);