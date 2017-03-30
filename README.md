# gulp
gulp快速构建项目

### gulp安装步骤

* 安装node.js

window下，下载node安装即可。 node下载地址：http://nodejs.cn/download/ 安装比较简单，基本一直下一步即可，安装路径随意。

安装完成后，终端命令 node-v 显示版本号即安装成功。npm同时也安装成功了，输入命令npm-v查看版本号。

![](http://g.hiphotos.baidu.com/exp/w=500/sign=61a17ceecffcc3ceb4c0c933a247d6b7/83025aafa40f4bfbdd5c6e98044f78f0f6361869.jpg) 

* 推荐安装cnpm

npm服务器在国外，网络影响大，甚至还会遇到需要翻墙才能下载插件的情况，因此推荐安装cnpm。

注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。后面的演示均使用cnpm

安装cnpm命令为 npm install cnpm -g --registry=https://registry.npm.taobao.org

安装完成后执行cnpm -v 显示版本号即安装成功 

![](http://e.hiphotos.baidu.com/exp/w=500/sign=769391d016dfa9ecfd2e561752d1f754/d8f9d72a6059252d506aeec8339b033b5ab5b9f9.jpg) 

* 全局安装gulp

执行 cnpm install gulp -g

安装完成后执行 gulp -v 显示版本号即安装成功 

![](http://b.hiphotos.baidu.com/exp/w=500/sign=1a91b0f54c36acaf59e096fc4cd88d03/5d6034a85edf8db11a6d8fa80e23dd54574e74bf.jpg) 

* 项目文件根目录新建package.json

package.json是基于nodejs项目必不可少的配置文件，它是存放在项目根目录的普通json文件重点内容

示例：进入 D:/WWW/test 项目文件夹中

![](http://g.hiphotos.baidu.com/exp/w=500/sign=a97812fb32fae6cd0cb4ab613fb20f9e/3812b31bb051f819b84bf086ddb44aed2f73e794.jpg)

执行命令 cnpm init 来新建package.json

![](http://d.hiphotos.baidu.com/exp/w=500/sign=10d86e8b3e12b31bc76ccd29b6193674/908fa0ec08fa513d45c29e123a6d55fbb3fbd996.jpg)

注：可不使用cnpm init方式，可选择手动创建package.json配置文件

* 本地安装gulp

注：全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能<br>
进入你的项目文件路径中后，执行cnpm install gulp --save-dev

* 安装gulp插件

例如安装gulp-sass gulp-less gulp-rename gulp-jshint gulp-concat gulp-uglify gulp-clean-css
进入你的项目文件路径中后，执行cnpm install gulp-sass gulp-less gulp-rename gulp-jshint gulp-concat gulp-uglify gulp-clean-css --save-dev

gulp常用插件：

sass的编译（gulp-sass）<br>
less编译 （gulp-less）<br>
重命名（gulp-rename）<br>
自动添加css前缀（gulp-autoprefixer）<br>
压缩css（gulp-clean-css）<br>
js代码校验（gulp-jshint）<br>
合并js文件（gulp-concat）<br>
压缩js代码（gulp-uglify）<br>
压缩图片（gulp-imagemin）<br>
自动刷新页面（gulp-livereload，谷歌浏览器亲测，谷歌浏览器需安装livereload插件）<br>
图片缓存，只有图片替换了才压缩（gulp-cache）<br>
更改提醒（gulp-notify）<br>

* 新建gulpfile.js

gulpfile.js是gulp的配置文件，放于根目录中。
未完待续。。。

参考文章<br>
http://jingyan.baidu.com/article/14bd256e7f7d7fbb6d2612c4.html <br>
http://www.gulpjs.com.cn/
