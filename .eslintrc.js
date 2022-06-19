module.exports = {
  root: true,
  extends: ['plugin:json/recommended-with-comments'],
  plugins: ['import', 'react', 'json'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 'warn', // 确保导入模块存在
    'import/no-amd': 'error', // 不能使用AMD规范
    'import/no-extraneous-dependencies': 'error', // 禁止使用无关软件包
    'import/namespace': 'warn', // 确保导入命名空间不引用无关联属性
    'import/no-self-import': 'error', // 禁止导入自己
    'import/no-webpack-loader-syntax': 'error', // 在导入中禁止加载webpack加载器语法
    'import/export': 'error', // 报告无效的导出
    'import/no-named-as-default': 'warn', // 禁值使用export导出的名称作为导入同一模块export default导出模块的名称
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'internal', 'external', 'index', 'sibling', 'parent', 'object', 'type'],
      },
    ], // 导入顺序
    'import/newline-after-import': 'warn', // Import语句强制换行
    // 'import/prefer-default-export': 'warn', // 如果模块是单个名称，首选默认导入
    // 'import/no-unassigned-import': 'warn', // 禁止未分配的模块导入，如直接导入css
    'import/dynamic-import-chunkname': [
      'warn',
      {
        importFunctions: ['dynamicImport'],
      },
    ], // 使用 webpackChunkName 强制执行前导注释以进行动态导入
    'for-direction': 'error', // 确保for循环技术朝着正确方向进行
    'no-await-in-loop': 'error', // 禁止循环中使用await
    'no-dupe-args': 'warn', // 禁止调用函数传参重复
    'no-async-promise-executor': 'error', // Promise中禁止使用异步函数作为参数
    'no-compare-neg-zero': 'warn', // 禁止与-0进行比较
    'no-cond-assign': 'warn', // 禁止表达式中出现赋值操作
    'no-constant-condition': 'warn', // 禁止在条件语句中出现常量表达式
    'no-control-regex': 'warn', // 禁止在正则表达式中使用控制字符
    'no-debugger': 'warn', // 禁止使用debugger
    'no-duplicate-case': 'warn', // 禁止出现重复的case标签
    'no-empty': 'warn', // 禁止出现空的语句块
    'no-empty-character-class': 'warn', // 禁止在正则表达式中使用空字符集
    'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 'warn', // 禁止不必要的boolean值转换
    'no-extra-semi': 'warn', // 禁止不必要的分号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-inner-declarations': 'warn', // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 'warn', // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'warn', // 禁止不规则的空白
    'no-misleading-character-class': 'warn', // 不允许在字符类语法中出现由多个代码点组成的字符
    'no-obj-calls': 'warn', // 禁止把全局对象作为函数调用 的内置属性
    'no-regex-spaces': 'warn', // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 'warn', // 禁用稀疏数组
    'no-template-curly-in-string': 'warn', // 禁止在常规字符串中出现模板字面量占位符语法
    'no-unexpected-multiline': 'warn', // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'warn', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 'warn', // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 'warn', // 禁止对关系运算符的左操作数使用否定操作符
    // 'require-atomic-updates': 'warn', // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': 'warn', // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 'error', // 强制 typeof 表达式与有效的字符串进行比较,防止拼写错误
    'accessor-pairs': 'warn', // 强制 getter 和 setter 在对象中成对出现
    'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 'warn', // 强制把变量的使用限制在其定义的作用域范围内
    'consistent-return': 'warn', // 要求 return 语句要么总是指定返回的值，要么不指定
    curly: 'warn', // 强制所有控制语句使用一致的括号风格
    'default-case': 'warn', // 要求 switch 语句中有 default 分支
    // 'dot-location': 'warn', // 强制在点号之前和之后一致的换行
    'dot-notation': 'warn', // 强制尽可能地使用点号
    eqeqeq: 'warn', // 要求使用 === 和 !==
    'guard-for-in': 'warn', // 要求 for-in 循环中有一个 if 语句
    'no-alert': 'warn', // 禁用 alert、confirm 和 prompt
    'no-caller': 'warn', // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'warn', // 不允许在 case 子句中使用词法声明
    'no-div-regex': 'warn', // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-else-return': 'warn', // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 'warn', // 禁止出现空函数
    'no-empty-pattern': 'warn', // 禁止使用空解构模式
    'no-eq-null': 'warn', // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-extend-native': 'warn', // 禁止扩展原生类型
    'no-extra-bind': 'warn', // 禁止不必要的 .bind() 调用
    'no-extra-label': 'warn', // 禁用不必要的标签
    'no-fallthrough': 'warn', // 禁止 case 语句落空
    'no-floating-decimal': 'warn', // 禁止数字字面量中使用前导和末尾小数点
    'no-global-assign': 'warn', // 禁止对原生对象或只读的全局对象进行赋值
    'no-implicit-coercion': 'warn', // 禁止使用短符号进行类型转换
    'no-iterator': 'warn', // 禁用 __iterator__ 属性
    'no-labels': 'warn', // 禁用标签语句
    'no-lone-blocks': 'warn', // 禁用不必要的嵌套块
    'no-loop-func': 'warn', // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-multi-spaces': 'warn', // 禁止使用多个空格
    'no-multi-str': 'warn', // 禁止使用多行字符串
    'no-new': 'warn', // 禁止使用 new 以避免产生副作用
    'no-new-func': 'warn', // 禁止对 Function 对象使用 new 操作符
    'no-new-wrappers': 'warn', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal': 'warn', // 禁用八进制字面量
    'no-octal-escape': 'warn', // 禁止在字符串中使用八进制转义序
    // 'no-param-reassign': 'warn', // 禁止对 function 的参数进行重新赋值
    'no-proto': 'warn', // 禁用 __proto__ 属性,使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
    'no-redeclare': 'warn', // 禁止多次声明同一变量
    'no-restricted-properties': [
      'error',
      {
        object: 'disallowedObjectName',
        property: 'disallowedPropertyName',
      },
      {
        object: 'disallowedObjectName',
        property: 'anotherDisallowedPropertyName',
        message: 'Please use allowedObjectName.allowedPropertyName.',
      },
    ], // 禁用对象的某些属性
    'no-return-assign': 'error', // 禁止在 return 语句中使用赋值语句
    // 'no-return-await': 'error', // 禁用不必要的 return await
    'no-self-assign': 'warn', // 禁止自我赋值
    'no-self-compare': 'warn', // 禁止自身比较
    'no-sequences': 'warn', // 禁用逗号操作符
    'no-sequences': 'warn', // 禁用逗号操作符
    'no-throw-literal': 'warn', // 禁止抛出异常字面量
    'no-unmodified-loop-condition': 'warn', // 禁用一成不变的循环条件
    'no-unused-labels': 'warn', // 禁用未使用过的标签
    // 'no-unused-vars': 'warn', // 禁止未使用的变量出现，此规则会导致ts接口定义参数类型出现报错
    'no-useless-call': 'warn', // 禁止不必要的 .call() 和 .apply()
    'no-useless-catch': 'warn', // 禁止不必要的 catch 子句
    'no-useless-concat': 'warn', // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 'warn', // 禁用不必要的转义字符
    'no-useless-return': 'warn', // 禁止多余的 return 语句
    'no-void': 'warn', // 禁用 void 操作符
    'no-warning-comments': 'warn', // 禁止在注释中使用特定的警告术语 //TODO or //FIXME
    'no-with': 'warn', // 禁用 with 语句
    // 'prefer-named-capture-group': 'warn', // 建议在正则表达式中使用命名捕获组
    'prefer-promise-reject-errors': 'warn', // 要求使用 Error 对象作为 Promise 拒绝的原因
    'require-await': 'warn', // 禁止使用不带 await 表达式的 async 函数
    'vars-on-top': 'warn', // 要求所有的 var 声明出现在它们所在的作用域顶部
    'wrap-iife': 'warn', // 需要把立即执行的函数包裹起来
    yoda: 'warn', // 要求或禁止 “Yoda” 条件
    'no-label-var': 'warn', // 不允许标签与变量同名
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.',
      },
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
    ], // 禁用特定的全局变量
    'no-shadow-restricted-names': 'warn', // 禁止将标识符定义为受限的名字
    'no-undef-init': 'warn', // 禁止将变量初始化为 undefined
    // 'no-undefined': 'warn', // 禁止将 undefined 作为标识符
    'no-use-before-define': 'warn', // 禁止在变量定义之前使用它们中
    'no-buffer-constructor': 'warn', // 禁用 Buffer() 构造函数
    'no-mixed-requires': 'warn', // 禁止混合常规变量声明和 require 调用
    'no-new-require': 'warn', // 禁止调用 require 时使用 new 操作符
    'no-path-concat': 'warn', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-exit': 'warn', // 禁用 process.exit()
    'no-restricted-modules': ['error', 'fs', 'cluster'], // 禁用node的某些模块
    'no-sync': 'warn', // 禁用同步方法
    camelcase: 'warn', // 强制使用骆驼拼写法命名约定
    'comma-dangle': ['error', 'always-multiline'], // 要求或禁止末尾逗号
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ], // 强制在逗号前后使用一致的空格
    'comma-style': ['warn', 'last'], // 强制使用一致的逗号风格
    'eol-last': ['error', 'always'], // 要求或禁止文件末尾保留一行空行
    'func-call-spacing': ['error', 'never'], // 要求或禁止在函数标识符和其调用之间有空格
    'implicit-arrow-linebreak': ['warn', 'beside'], // 强制隐式返回的箭头函数体的位置
    // indent: ['warn', 2], // 强制使用一致的缩进,使用pretttier做缩进,eslint一般需要取消改规则
    'jsx-quotes': ['warn', 'prefer-single'], // 强制在 JSX 属性中使用一致的单引号或双引号
    'linebreak-style': ['error', 'unix'], // 强制使用一致的换行符风格
    'lines-between-class-members': ['error', 'always'], // 要求或禁止在类成员之间出现空行
    // 'new-cap': 'warn', // 要求构造函数首字母大写
    'new-parens': 'warn', // 要求调用无参构造函数时带括号
    'no-array-constructor': 'warn', // 禁止使用 Array 构造函数
    'no-lonely-if': 'warn', // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-mixed-operators': 'warn', // 禁止混合使用不同的操作符
    'no-mixed-spaces-and-tabs': 'warn', // 禁止使用 空格 和 tab 混合缩进
    'no-multi-assign': 'warn', // 禁止连续赋值
    'no-multiple-empty-lines': 'warn', // 禁止出现多行空行
    'no-new-object': 'warn', // 禁用 Object 的构造函数
    'no-unneeded-ternary': 'warn', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-whitespace-before-property': 'warn', // 禁止属性前有空白
    'operator-assignment': 'warn', // 要求或禁止在可能的情况下使用简化的赋值操作符
    'prefer-object-spread': 'warn', // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
    quotes: ['warn', 'single', { allowTemplateLiterals: true }], // 强制使用一致的反勾号、双引号或单引号
    semi: 'warn', // 要求或禁止使用分号代替 ASI
    'space-before-blocks': ['warn', { functions: 'always', keywords: 'always', classes: 'always' }], // 要求或禁止语句块之前的空格
    'space-infix-ops': 'warn', // 要求操作符周围有空格
    'switch-colon-spacing': 'warn', // 强制在 switch 的冒号左右有空格
    'template-tag-spacing': ['error', 'always'], // 要求或禁止在模板标记和它们的字面量之间有空格
    // 'wrap-regex': 'warn', // 要求正则表达式被括号括起来
    'no-const-assign': 'warn', // 禁止修改 const 声明的变量
    'no-dupe-class-members': 'warn', // 禁止类成员中出现重复的名称
    'no-duplicate-imports': 'warn', // 禁止重复模块导入
    'no-new-symbol': 'warn', // 禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 'warn', // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-useless-computed-key': 'warn', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'warn', // 禁用不必要的构造函数
    'no-useless-rename': 'warn', // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 'warn', // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['warn', 'always'], // 要求对象字面量简写语法
    'prefer-const': 'warn', // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-destructuring': ['warn', { object: true, array: false }], // 优先使用数组和对象解构
    'prefer-rest-params': 'warn', // 要求使用剩余参数而不是 arguments
    'prefer-spread': 'warn', // 要求使用扩展运算符而非 .apply()
    'prefer-template': 'warn', // 要求使用模板字面量而非字符串连接
    'require-yield': 'warn', // 要求 generator 函数内有 yield
    'symbol-description': 'warn', // 要求 symbol 描述
    'react/boolean-prop-naming': ['warn', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }], // 对布尔属性强制执行一致的命名
    'react/hook-use-state': 'warn', // 确保 useState 钩子值和 setter 变量（反应/钩子使用状态）的解构和对称命名
    'react/iframe-missing-sandbox': 'warn', // 在 iframe 元素上强制实施sandbox属性
    'react/no-access-state-in-setstate': 'warn', // 在this.setState中禁止调用this.state,而是使用回调函数进行传参
    'react/no-array-index-key': 'warn', // 防止在键中使用数组索引
    'react/no-arrow-function-lifecycle': 'warn', // 生命周期方法应该是原型上的方法，而不是类字段
    'react/no-danger': 'warn', // 防止使用危险的 JSX 语法
    'react/no-direct-mutation-state': 'warn', // 防止this.state直接变化
    'react/no-unsafe': 'warn', // 防止使用不安全的生命周期方法
    'react/jsx-boolean-value': ['warn', 'never', { always: ['personal'] }], // 在给组件传boolean属性时，boolean可以直接省略
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'], // 验证 JSX 中的右括号位置
    'react/jsx-key': 'error', // 报告迭代器/集合文本中缺少的属性key
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
    },
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
  },
  overrides: [
    {
      files: ['./client/**/*.(js|jsx)'],
      rules: {
        'import/no-commonjs': 'warn', // 禁止使用common.js规范
        'import/no-nodejs-modules': 'warn',
      },
    },
    {
      files: ['./server/**/*.js'],
      rules: {},
    },
    {
      files: ['./client/**/*.ts', './server/**/*.ts', './client/**/*.tsx'],
      plugins: ['@typescript-eslint'],
      rules: {
        'import/no-unresolved': 0,
      },
    },
  ],
  settings: {
    react: {
      version: '17.x',
    },
  },
};
