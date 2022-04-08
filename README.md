<<<<<<< HEAD
# it-code-family
it码家：专为代码而生
=======
## 项目说明

### 项目启动

1. 安装开发依赖：`npm run rinstall`
2. 开发环境启动：`npm start`
3. 删除开发依赖项：`npm run remove`

### vscode 开发准备：

插件安装：ESLint Perttier

### 服务端开发规范：

服务端框架：koa

#### 接口开发：

​ 在 server/cloupapi 下 get 或 post 文件夹中新建 js 文件，get 文件夹中存放 get 请求接口，post 文件夹中对应 post 请求接口，如果需要用到其他类型的请求，则按照前者规范，以请求方式为文件夹名在 cloupapi 中创建文件夹，在该文件中开发接口即可；

​ 创建好接口文件后，按照已有接口规范进行开发，注意，接口中导入方法的第二个参数 next 一定要使用，否则会导致中间件不生效；

#### 中间件开发：

中间件开发类似于接口开发，区别于接口开发在于每一次请求服务器，都会触发中间件，每需要开发一个新的中间件的时候，直接在 middleware 中新建文件，按照已有文件规范进行开发即可；

#### 数据模型开发：

数据模型采用一个表对应一个数据模型的方式进行开发，一般情况下，在接口中使用 getGlobalModel 拿去数据模型，注意：不要将 baseModel.js 作为参数传入；尽量在 default 文件夹下进行开发，若果模型太多，可以在 models 新建文件夹，在新文件夹下进行开发即可；（注：数据模型采用 knex.js 库）

#### 状态信息的使用：

如果在开发中涉及到错误信息，或者成功提示，状态信息需要集成在 statuscode.js 中进行导出，然后再开发文件中导入使用，而不是直接在开发文件中直接写入；

错误示例：message:{code : 0, result:"success"} 正确示例: 导入后 message:{code: SUCCESS_CODE,result: SUCCESS_INFO}

### 开发技巧：

1.项目配置好了 eslint 的未完成标记功能，当有待完成任务时，注释：//TODO 或者 //FIXME,当有这个注释时，git commit 会不成功，待修复后才能提交成功；

### 详细文档帮助

1. Umi 文档：https://umijs.org/zh-CN
2. Koa 文档：https://koa.bootcss.com/
3. kenx 文档：http://knexjs.org/
>>>>>>> origin/main
