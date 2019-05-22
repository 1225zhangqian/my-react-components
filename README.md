# my-react-components/is-notification


🎉 从0开始搭建react项目，完成组件封装，在npm上发布组件库
多个配置文件，辅助生产环境及开发环境打包部署，含demo，单元测试待完善...

package.json
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --open --config webpack.dev.conf.js",
    "build": "npm run clean && webpack --config webpack.prod.conf.js",
    "clean": "rimraf dist/*",
    "sass": "node-sass style/index.scss dist/index.css",
    "postsass": "postcss dist/index.css --use autoprefixer -m -o dist/index.css",
    "style": "npm run sass && cssnano dist/index.css dist/index.min.css --no-zindex --no-reduceIdents"
  },
   ```
   此处执行npm run build 执行了两个命令
   依赖rimraf 删除原来打包的文件，利用webpack打包（webpack可以打包多类型文件）
   
  ```
   // /components/index.js
  
import Notification from './notification'
export default Notification
  ```
  组件导出的时候添加default，因此发布成功后使用时操作如下(发布的名称为is-notification)
  ```
  //安装
  npm install is-notification
  
  //引用
  import Notification from is-notification
  ```
