var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/itcast')
var Schema = mongoose.Schema
var studentSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: Number, required: true, emub: [0, 1], default: 0 },
    age: { type: Number, required: true },
    hobbies:{type:String,required:true}

})


module.exports=mongoose.model('Student',studentSchema)