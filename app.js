 /**  
   app.js 入口模块
 **/
var express=require('express')
//var fs = require('fs')  移到router里面了
var router=require('./router')
var bodyParser=require('body-parser')
var session = require('express-session')

 var app=express()




app.use('/public/',express.static('./public/'))  //开放公共静态资源文件夹
app.use('/node_modules/',express.static('./node_modules/'))  //开放公共静态资源文件夹
 
app.set('views','./yemian/')//设置打开页面的路径
app.engine('html',require('express-art-template')) //加载art-template模板引擎

//配置body-parser中间件  post用
//配置模板引擎和body-parser 一定要在 app.use(router)挂载路由之前
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use(bodyParser.json())


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

//router(app)
//把路由容器挂载到app服务中
app.use(router)

app.listen(9000,function(){
console.log('服务器已经启动了')

})