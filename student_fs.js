/**  
数据操作文件模块
只关心数据  不关心业务
 **/
var fs = require('fs')
var filePath = './db.json'
/**  
获取所有学生
**/




exports.find = function(callback) {
    fs.readFile('./db.json', 'utf8', function(err, data) {

        if (err) {
            return callback(err)
        }
        if (data !== '') {

            callback(null, JSON.parse(data).students)
        } else { callback(null, null) }


    })

}

/**  
 添加保存学生
 **/
exports.save = function(student, callback) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students


        //处理id唯一   不重复  id+1
        student.id = students[students.length - 1].id + 1
        //把用户传递的对象保存到数组中
        students.push(student)
        //把对象数据转换为字符串
        var filedatas = JSON.stringify({ students: students })
        //把字符串保存到文件中
        fs.writeFile(filePath, filedatas, 'utf8', function(err) {
            if (err) {
                return callback(err)

            }

            callback(null)

        })

    })

}






/**  
根据id获取学生对象

**/

exports.findById = function(id, callback) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var result = students.find(function(item) {
            return item.id === parseInt(id)

        })
        callback(null, result)
    })

}





/**  
 更新学生
 **/
exports.updateById = function(student, callback) {
    fs.readFile(filePath, 'utf8', function(err, data) {

        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //你要修改谁，就需要把谁找出来
        //es  EcmaScript 6中的一个数组方法：find
        //需要接收一个函数作为函数
        //当某个遍历项符合 item.id===student.id条件的时候，find会终止遍历，同时返回值
        //注意把字符串转换为数字
        student.id = parseInt(student.id)
        student.age = parseInt(student.age)


        var stu = students.find(function(item) {
            return item.id === student.id
        })

        //find()方法原型
        // Array.prototype.myfind=function (callback){
        //   for(var i=0;i<this.length;i++){
        //    if(callback(this[i],i)){
        //    return this[i]//   find是this[i]元素   findIndex就是i 索引

        //    }

        //   }
        // }


        //这种方式你就写死了，有100个难道就写100个吗？
        //stu.name=student.name
        //stu.age=student.age

        //遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }

        //把对象数据转换为字符串
        var filedatas = JSON.stringify({
            students: students
        })

        fs.writeFile(filePath, filedatas, 'utf8', function(err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}





/**  
删除学生
**/
exports.deleteById = function(student_id, callback) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //findindex方法专门用来根据条件查找元素的下标
        var deleteId = students.findIndex(function(item) {
            return item.id === parseInt(student_id)

        })
        //删除students数组中下标为deleteId的一条数据
        students.splice(deleteId, 1)
        var filedatas = JSON.stringify({ students: students })


        fs.writeFile(filePath, filedatas, function(err) {
            if (err) {
                return callback(err)

            }
            callback(null)

        })
    })



}