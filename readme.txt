1.create-react-app
此插件会自动配置好一个react相关的webpack开发环境,所有基本配置都已经配置完毕，我们不用再自己花时间写
webpack.config.js文件

npm start           Starts the development server.
npm run build       Bundles the app into static files for production.
npm test             Starts the test runner.
npm run eject       Removes this tool and copies build dependencies, configuration files
                     and scripts into the app directory. If you do this, you can’t go back!
取消托管：npm run eject


分析：
    1.下面是组件之间需要共享数据放在redux
        redux.store.state={
            userinfo:{cityName:'北京'}
        }