# weapp


安装及使用
安装
Taro 项目基于 node，请确保已具备较新的 node 环境（>=8.0.0），推荐使用 node 版本管理工具 nvm 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。



# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org


[框架源码](https://github.com/NervJS/taro)
[框架稳定教程](https://taro-docs.jd.com/taro/docs/GETTING-STARTED.html)

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli