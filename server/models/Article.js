const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {type: String},
    brief:{type:String},
    cateArticle: {type: mongoose.SchemaTypes.ObjectId,ref:'Catearticle' },
    image: {type:String},
    body:{type:String}
},{
    //开启自动写入时间戳
    timestamps:true
})

module.exports = mongoose.model('Article', schema)