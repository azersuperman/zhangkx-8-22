//轮播图和选项卡的逻辑
//按需导入
import { marquee } from "./marquee.js"
//默认导入
import tabs from "./tabs.js"


//函数调用
marquee()
tabs()


// webpack默认只能打包js和json文件
// -如果说我们想去拓展webpack的打包能力，需要下载其他的加载器


//1. 在main.js中引入css文件
//2. 直接引入整个css文件
//3. .css不可省略
import './style/index.css'

// 引入less
import './style/index.less'


// 添加图片
// 1。引用图片
// -引入图片
import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)


import './assets/fonts/iconfont.css'

class Person {
    name = '张三'
    age = 18
}
console.log(Person)