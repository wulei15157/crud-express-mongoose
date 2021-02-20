var mongoose = require('mongoose')


//1链接数据库
//指定链接的数据库不需要存在，当你插入第一条数据之后就会自动被创建 出来
mongoose.connect('mongodb://localhost/itcast',{userMongoClient:true})

//2设计集合或文档 结构（表结构）
//字段名称就是表结构中的属性名称
//值
//约束的目的是为了保证数据的完整性，不要有脏数据
var  blogSchema = new Schema({
   title:String,
   author:String,
   comments:[{body:String,data:Date}]
   date:{type:Date,default:Date.now}
   gender:{type:Number,enum:[0,1],required:true}
})

//3将文档结构发布为模型
//mongoose.model方法就是用来将一个架构发布为model
//第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//mongoose 会自动将大写名词的字符串生成小写复数的集合名称
//例如这里的Blog最终会变为blogs集合名称
//第二个参数：架构Schema
//返回值：模型构造函数
 var blog = mongoose.model('Blog',blogSchema)

 //4当我们有了模型构造函数之后，就可以 使用这个构造函数对users中的数据为所欲为了


 var admin = new Blog({})





/*新增*/
 admin.save(function(err,ret){

 	if(err){console.log("保存失败了")}else{console.log("保存成功")}
 })

 /*查询*/

admin.find(function(err,ret){

	if(err){console.log("查询失败")}else{console.log("查询成功哦")}
})

/*根据条件查*/
// findone
 admin.find({username:'小明'},function(err,ret){
 	if(err){
 		console.log("查询失败")
 	}else{console.log('查询失败')}
 })


 /*删除  remove({},function(err){}) 

   findOneAndRemove(conditions,[options],[callback])

     findByIdAndRemove(id,[options],[callback])
     */ 
 admin.remove({},function(err,ret){

 	if(err){console.log('删除错误')}else{console.log('删除成功')}
 })


 /*更新  update({},{},function(err,ret){})

   findOneAndUpdate()
     findByIdAndUpdate(id,[options].[callback])

     */
 admin.findByIdAndUpdate('',{password:123},function(err,ret){
if(err){
	console.log("更新成功")
}else{console.log('更新失败')}

 })