var fs = require('fs')
var express=require('express')
var Student=require('./student_fs')

 var shujus=[{name:'wx',age:18},{name:'wx',age:18},{name:'wx',age:18}]
 var students_title='学生列表'
 var students_new_title='添加学生'
  var biaoti='学生列表'
  var liebiaoming=['选择','id','姓名','性别','年龄','爱好','操作']
  var login='登录页'
  var students_edit='学生修改页面'
  var students_delete='学生删除页面'

 

//1创建一个路由容器	
var router =express.Router()
//2把路由都挂载到router路由容器中

 
// module.exports=function(app){
 router.get('/students',function(req,res){
//readfile第二个参数是可选的，传入utf8
// fs.readFile('./db.json', 'utf8', function(err,data){
// 	if (err) {
// 		res.status(500).send('server error')
// 		return
// 	}

// 	console.log(JSON.parse(data).students.length)
// 	res.render('index.html',{shujus:shujus,
// 		title:students_title,
// 		sss:biaoti,
// 		liebiaoming:liebiaoming,
// 		students:JSON.parse(data).students
// 	})

// }) 

Student.find(function(err,students,s){
if(err){
		return	res.status(500).send('server error')
 }	
 else if(students===null){

   return res.send('没有数据')
 }
 
res.render('index.html',{shujus:shujus,
		title:students_title,
		sss:biaoti,
		liebiaoming:liebiaoming,
		students:students
	})
 

})





})

//测试
// Student.updateById({
// 	id:1,
// 	name:'小吴'
// },function(err){
// if(err){
// return	console.log('更新错误')
// }
// console.log('更新成功')

// })



router.get('/',function(req,res){
//res.send('首页')
res.render('login.html',{login:login})
})


router.get('/students/new',function(req,res){
     res.render('new.html',{title:students_new_title,
            liebiaoming:liebiaoming
     })

	})

    router.post('/students/new',function(req,res){
     // console.log(req.body)
      //res.redirect('/')
   var Students = new Student(req.body)
    Students.save(function(err){ 
             if(err){
                return res.status(500).send('server error')
             }
     res.redirect('/students')
		})
	})


	router.get('/students/edit',function(req,res){
    var id = req.query.id.replace(/"/g,'') 

   Student.findById(id,function(err,student){
if (err) {return res.status(500).send('server error')}
else if(student===''){return res.send('没有该学生')}
   res.render('update.html',{student:student,students_edit:students_edit})
 

   })

 	})


	router.post('/students/edit',function(req,res){
  
     var id =req.body.id.replace(/"/g,'')
     console.log(id)
 
Student.findByIdAndUpdate(id,req.body,function(err){
if(err){
  console.log(err)
   return res.status(500).send('500')
}

res.redirect('/students')

})



		
	})

	router.get('/students/delete',function(req,res){
Student.findByIdAndRemove(req.query.id.replace(/"/g,''),function(err){
if(err){
return res.status(500).send('500')

}
res.redirect('/students')

})


 	})

 

//3把router导出

module.exports = router


// }

// express提供了更方便的方式
