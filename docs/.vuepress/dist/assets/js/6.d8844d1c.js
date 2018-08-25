(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("这对于使用缓存，加快js加载，有着得天独厚的帮助")]),t._v(" "),a("p",[t._v("当然因为使用了缓存，js build的时候必须使用hash作为文件名，以便判断是否启用缓存。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("为了优化初始加载js时候的时间，使用按需加载模式，即把js文件按照页面维度打包，初始加载时候仅加载必要的几个文件。")]),t._v(" "),a("p",[t._v("build 之后会在./dist下生成：")]),t._v(" "),t._m(4),a("p",[t._v("index.html 会加载 umi.{hash}.js 和 umi.{hash}.css，然后按需加载 index 和 list 两个页面的 JS。")]),t._v(" "),a("p",[t._v("但最初的实践过程中，发现按需加载延迟可能会达到300ms-600ms，已经达到可观察范围，可谓效果不太好。")]),t._v(" "),a("p",[t._v("于是，尝试了以下几种方案：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("实现原理：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://motion.ant.design/components/tween-one",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Motion"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"service-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-work","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Work")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("umi")]),this._v(" 支持 Service Work （Https/localhost）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"按需加载-及-静默加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需加载-及-静默加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 按需加载 及 静默加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./dist\n├── index.html\n└── static\n    ├── pages__index.hash4.async.js\n    ├── pages__list.hash3.async.js\n    ├── umi.hash2.js\n    └── umi.hash1.css\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("一次性加载 结果就是在胡桃街渣服务器下，首次加载可能要个10-20s，然后就被师傅训了一顿。用户体验爆炸💥。")]),this._v(" "),s("li",[this._v("按需加载+静默加载。静默加载就是当用户已经看得见首页之后，默默的把剩下的js资源记载一遍")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("一开始，为了偷懒，省去了hash值，把所需要加载的js列表写死在项目中。当Subscription监听到history action，先加载layout等必须的js."),s("br"),this._v("\n等待主页加载好，既layouts/index.js进入生命周期时，把剩下的所有资源同步加载。这个阶段实测胡桃街初次加载时间在2s-6s左右")]),this._v(" "),s("li",[this._v("之后，因为接入Services Work，为了发版之后，不再调用上个版本的缓存，写了个脚本，存储build完所有js列表。并按重要程度，分为上下两部分。"),s("br"),this._v("\n当Subscription监听到history action 之后，先用fetch 调用list，然后根据list分两次同步加载js。目前实现Load时间在400ms-800ms左右。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2018/png/104214/1535016231978-5b9af5e2-e384-4fb1-90d6-c1f4e55611e2.png",alt:"图片.png | left | 747x558"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" https://cavalry.corp.yiran.com/sdk/js/v1.js "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" static/list.js\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" static/*layout*.js static/*common*.js static/*pages__index*.js static/*task__index*.js static/*.js\n"),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),t._v(" -f "),a("span",{attrs:{class:"token variable"}},[t._v("$file")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/'),a("span",{attrs:{class:"token variable"}},[t._v("$file")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" static/list.js\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fetchHashList")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" call "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      importScriptTime "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layoutServices"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchHashList"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" firstHashList "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      firstHashList"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" script "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'script'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'application/javascript'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("firstHashList"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("includes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" script "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'script'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'application/javascript'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            script"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intervalTime"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"入场动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入场动画","aria-hidden":"true"}},[this._v("#")]),this._v(" 入场动画")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了努力实现"),s("code",[this._v("双一流")]),this._v("项目建设，在比对了各大网站之后，决定给TAISHAN加一个入场动画")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在index.html加载完之后先展示layouts/PageLoadingComponent.js;")]),this._v(" "),s("li",[this._v("当layouts/index.js加载完成，开始计时，1s之后动画结束;")]),this._v(" "),s("li",[this._v("1s的设定是基于利用Services Work + 静默加载优化过后，时间差过小，入场动画反而起到不适感;")]),this._v(" "),s("li",[this._v("具体的动画原理，是基于svg + rc-tween-one，其中svg利用online generate 工具;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);e.options.__file="deploy.md";s.default=e.exports}}]);